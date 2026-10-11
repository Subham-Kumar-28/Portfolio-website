# Subham Kumar — Personal Portfolio (Cherry Blossom 🌸)

An elegant, responsive personal portfolio website for **Subham Kumar**, B.Sc. in Artificial Intelligence and Machine Learning student at Marwari College, Ranchi. Built purely with **HTML5, CSS3, and vanilla JavaScript**, featuring an authentic Sakura theme, 5 visual themes, interactive petal animation modes, LinkedIn activity integration, verified certificates showcase, and real GitHub sync.

---

## 🌸 Key Features

- **Multi-Theme System (5 Themes with Instant Switcher)**:
  1. 🌸 **Sakura Spring (Light)**: Pastel pink, soft cream, crisp blush white, and high-contrast ink typography.
  2. 🌙 **Midnight Sakura (Dark)**: Deep charcoal obsidian (`#0C0A0E`), glowing sakura pink (`#F472B6`), deep burgundy surfaces.
  3. 🌅 **Sunset Twilight**: Dusky rose amber, golden sakura warmth, and twilight glow.
  4. 🍵 **Matcha Zen**: Soft emerald sage and ivory with gentle blossom accents.
  5. 🌌 **Cyber Blossom**: Neon synthwave glow with electric cyan and magenta lines.
  - Saved to `localStorage` with system OS preference fallback.

- **Interactive Sakura Canvas Engine & Animation Modes**:
  - 🌸 **Gentle Breeze**: Subtle drifting petals with natural sway.
  - 🍃 **Sakura Swirl**: Wind vortices with dynamic angle changes.
  - 🌨️ **Blossom Flurry**: Dense shower of falling cherry blossoms.
  - ⏸️ **Pause Petals**: Quiet background mode for minimal motion.
  - **Interactive Mouse Aerodynamics**: Moving the cursor deflects nearby petals with natural breeze physics.
  - **Blossom Particle Bursts**: Radiant micro-bursts of sakura petals on button clicks and theme switches.
  - **3D Card Hover Tilt**: Perspective tilt on the hero student badge card.
  - **Swaying Branch Ornament**: Delicate vector cherry blossom branch swaying in the background.

- **LinkedIn Activity Stream & Verified Profile (`#linkedin`)**:
  - Live showcase of Subham Kumar's academic milestones, lab insights, and project updates.
  - Direct "Connect on LinkedIn" actions linking to verified profile (`https://www.linkedin.com/in/subham-kumar-814711399/`).

- **Verified LinkedIn Certificates Showcase (`#certificates`)**:
  - 6 verified academic and technical certifications:
    1. *Machine Learning Foundations & Supervised Learning* (Stanford Online & DeepLearning.AI)
    2. *Python for Data Science, AI & Development* (IBM Professional)
    3. *Databases and SQL for Data Science* (IBM / Cognitive Class)
    4. *Exploratory Data Analysis & Dashboards in Excel* (Microsoft / LinkedIn Learning)
    5. *Arduino & Microcontroller Hardware Prototyping* (IoT Academy)
    6. *Introduction to Artificial Intelligence & Neural Networks* (DeepLearning.AI)
  - Category filters (*All*, *AI & Machine Learning*, *Data Analytics & SQL*, *Hardware & IoT*).
  - Modal credential inspector with Credential IDs, skills verified, and direct verification link.

- **Projects Catalog (`/js/projects.js`)**:
  - *MCR Notes Website* (Web & Cloud / Render + Supabase)
  - *Retail Sales Excel Dashboard* (Data Analytics / Pivot Tables + Trends)
  - *Arduino Clap-Controlled Light* (Hardware & IoT / Pins D2 & D8)
  - Modal inspection with architecture and verification checklist.

- **Real GitHub API Live Integration (`#github`)**:
  - Live data retrieval from `https://api.github.com/users/Subham-Kumar-28/repos`.
  - Real repository names, descriptions, languages, star counts, and direct links.

- **Verified Contact Flow (`/api/contact` & Fallbacks)**:
  - Verified email: `myselfsubhamkumar@gmail.com`.
  - 1-click clipboard copy with toast confirmation.
  - Server validation via `/api/contact` in `server.ts` with transparent status reporting and 1-click mailto fallback.

---

## 📁 File Structure

```text
├── index.html          # Semantic HTML5 entry point & SEO metadata
├── css/
│   └── style.css       # Complete CSS3 design system with 5 themes & animations
├── js/
│   ├── config.js       # Central data file (Personal info, LinkedIn feed, Certificates, Skills)
│   ├── projects.js     # Central data catalog for projects & verification status
│   └── main.js         # Core vanilla JS engine (Themes, Petals, Tilt, Modals, APIs)
├── server.ts           # Full-stack Express server with /api/contact handler
├── package.json        # Project scripts & dependencies
└── README.md           # Documentation & instructions
```

---

## 🚀 Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Start full-stack development server
npm run dev
```

Visit `http://localhost:3000`.

To run purely statically without Node:
```bash
python3 -m http.server 8000
```
Visit `http://localhost:8000`.
