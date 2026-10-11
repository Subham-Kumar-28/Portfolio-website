/**
 * Express Server for Subham Kumar's Portfolio
 * 
 * Provides:
 * - /api/contact: Secure server-side validation and email delivery handler
 * - /api/health: Server health and email configuration status
 * - Vite dev middleware integration in development mode
 * - Static file serving in production mode
 */

import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
const isProduction = process.env.NODE_ENV === 'production';

app.use(express.json());

// API: Check email service configuration status
app.get('/api/status', (_req: Request, res: Response) => {
  const hasResend = Boolean(process.env.RESEND_API_KEY);
  const hasSmtp = Boolean(process.env.SMTP_HOST && process.env.SMTP_USER);

  res.json({
    recipient: 'myselfsubhamkumar@gmail.com',
    configured: hasResend || hasSmtp,
    provider: hasResend ? 'Resend API' : (hasSmtp ? 'SMTP' : 'None (Awaiting configuration)'),
    environment: process.env.NODE_ENV || 'development'
  });
});

// API: Contact form submission endpoint
app.post('/api/contact', async (req: Request, res: Response) => {
  const { name, email, subject, message } = req.body || {};

  // Server-side validation
  if (!name || typeof name !== 'string' || name.trim().length === 0) {
    return res.status(400).json({ success: false, message: 'Name is required.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || typeof email !== 'string' || !emailRegex.test(email)) {
    return res.status(400).json({ success: false, message: 'A valid email address is required.' });
  }

  if (!subject || typeof subject !== 'string' || subject.trim().length === 0) {
    return res.status(400).json({ success: false, message: 'Subject is required.' });
  }

  if (!message || typeof message !== 'string' || message.trim().length < 10) {
    return res.status(400).json({ success: false, message: 'Message must be at least 10 characters long.' });
  }

  const recipient = 'myselfsubhamkumar@gmail.com';

  // 1. Check if Resend API is configured
  if (process.env.RESEND_API_KEY) {
    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: process.env.EMAIL_FROM || 'Subham Portfolio <onboarding@resend.dev>',
          to: [recipient],
          reply_to: email,
          subject: `[Portfolio Contact] ${subject.trim()}`,
          text: `Name: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`
        })
      });

      if (response.ok) {
        return res.json({ success: true, message: 'Email sent successfully via Resend.' });
      } else {
        const errorData = await response.text();
        console.error('Resend delivery failed:', errorData);
        return res.status(502).json({
          success: false,
          configured: true,
          message: 'Email service provider rejected delivery. Please try again or use direct email.'
        });
      }
    } catch (err) {
      console.error('Error connecting to Resend:', err);
      return res.status(500).json({
        success: false,
        configured: true,
        message: 'Network error connecting to email service provider.'
      });
    }
  }

  // 2. If no email provider credentials are provided, return honest status
  return res.status(503).json({
    success: false,
    configured: false,
    message: 'Backend email service credentials (RESEND_API_KEY or SMTP) are not yet configured in server environment. Please use the direct mailto option or copy the email address.'
  });
});

async function startServer() {
  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Cherry Blossom Portfolio server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
