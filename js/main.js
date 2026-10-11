/**
 * Cherry Blossom 🌸 Multi-Theme & Interactive Engine for Subham Kumar
 * 
 * Vanilla JavaScript (ES Module)
 * Features:
 * - 5 Distinct Visual Themes with Instant LocalStorage Persistence
 * - Advanced Sakura Canvas Engine with 4 Modes & Interactive Mouse Wind
 * - Blossom Particle Bursts & 3D Interactive Card Tilt
 * - Dynamic Curriculum Skills (config.js)
 * - Dynamic Projects Gallery, Filtering & Detail Modal (projects.js)
 * - LinkedIn Verified Certificates Showcase & Credential Modal
 * - LinkedIn Activity Stream & Profile URL Manager
 * - Real GitHub API Live Repository Fetcher
 * - Contact Flow with Server Verification & Mailto Fallback
 */

import { personalInfo, skillCategories, linkedInActivities, certificates, certCategories } from './config.js';
import { projects, projectCategories } from './projects.js';

/* ==========================================================================
   1. Multi-Theme Management (5 Themes)
   ========================================================================== */

const THEME_STORAGE_KEY = 'subham_kumar_portfolio_theme';
const DEFAULT_THEMES = ['light', 'dark', 'sunset', 'matcha', 'cyber'];

function initializeThemeSystem() {
  const menuBtn = document.getElementById('theme-menu-btn');
  const paletteMenu = document.getElementById('theme-palette-menu');
  const themeOptionBtns = document.querySelectorAll('.theme-option-btn');

  // Load saved theme or OS preference
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  let currentTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');

  if (!DEFAULT_THEMES.includes(currentTheme)) {
    currentTheme = 'light';
  }

  applyTheme(currentTheme);

  // Toggle palette menu
  if (menuBtn && paletteMenu) {
    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      paletteMenu.classList.toggle('open');
      // Close other dropdowns if open
      document.getElementById('petal-preset-menu')?.classList.remove('open');
    });

    document.addEventListener('click', (e) => {
      if (!paletteMenu.contains(e.target) && !menuBtn.contains(e.target)) {
        paletteMenu.classList.remove('open');
      }
    });
  }

  themeOptionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const themeId = btn.getAttribute('data-theme-id');
      if (themeId) {
        applyTheme(themeId);
        localStorage.setItem(THEME_STORAGE_KEY, themeId);
        paletteMenu?.classList.remove('open');
        createBlossomBurst(btn);
      }
    });
  });

  // OS theme change listener
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem(THEME_STORAGE_KEY)) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);

  // Update active state in theme menu
  document.querySelectorAll('.theme-option-btn').forEach(btn => {
    if (btn.getAttribute('data-theme-id') === theme) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  const themeIcon = document.getElementById('theme-icon');
  if (themeIcon) {
    switch (theme) {
      case 'dark': themeIcon.textContent = '🌙'; break;
      case 'sunset': themeIcon.textContent = '🌅'; break;
      case 'matcha': themeIcon.textContent = '🍵'; break;
      case 'cyber': themeIcon.textContent = '🌌'; break;
      default: themeIcon.textContent = '🌸'; break;
    }
  }
}

/* ==========================================================================
   2. Advanced Sakura Canvas Engine (Modes & Interactive Wind)
   ========================================================================== */

class SakuraEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;

    this.ctx = this.canvas.getContext('2d');
    this.petals = [];
    this.mode = 'gentle'; // 'gentle', 'swirl', 'shower', 'pause'
    this.animationFrameId = null;
    this.wind = 0;
    this.targetWind = 0;
    this.mouseX = -1000;
    this.mouseY = -1000;

    // Reduced motion check
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      this.mode = 'pause';
    }

    this.init();
  }

  init() {
    this.resize();
    window.addEventListener('resize', () => this.resize(), { passive: true });

    // Track mouse for interactive breeze deflection
    window.addEventListener('mousemove', (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    }, { passive: true });

    window.addEventListener('mouseleave', () => {
      this.mouseX = -1000;
      this.mouseY = -1000;
    });

    this.setupPetalControls();
    this.resetPetalsForMode();

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.stop();
      } else if (this.mode !== 'pause') {
        this.animate();
      }
    });

    if (this.mode !== 'pause') {
      this.animate();
    }
  }

  setupPetalControls() {
    const menuBtn = document.getElementById('petal-menu-btn');
    const menu = document.getElementById('petal-preset-menu');
    const optionBtns = document.querySelectorAll('.petal-option-btn');

    if (menuBtn && menu) {
      menuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        menu.classList.toggle('open');
        document.getElementById('theme-palette-menu')?.classList.remove('open');
      });

      document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !menuBtn.contains(e.target)) {
          menu.classList.remove('open');
        }
      });
    }

    optionBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const selectedMode = btn.getAttribute('data-petal-mode');
        if (selectedMode) {
          this.setMode(selectedMode);
          menu?.classList.remove('open');
          createBlossomBurst(btn);
        }
      });
    });
  }

  setMode(newMode) {
    this.mode = newMode;

    document.querySelectorAll('.petal-option-btn').forEach(btn => {
      if (btn.getAttribute('data-petal-mode') === newMode) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    const icon = document.getElementById('petal-icon');
    if (icon) {
      switch (newMode) {
        case 'swirl': icon.textContent = '🍃'; break;
        case 'shower': icon.textContent = '🌨️'; break;
        case 'pause': icon.textContent = '⏸️'; break;
        default: icon.textContent = '🌸'; break;
      }
    }

    if (newMode === 'pause') {
      this.stop();
    } else {
      this.resetPetalsForMode();
      if (!this.animationFrameId) {
        this.animate();
      }
    }
  }

  resetPetalsForMode() {
    let count = 38;
    if (this.mode === 'shower') count = 75;
    if (this.mode === 'swirl') count = 48;

    this.petals = [];
    for (let i = 0; i < count; i++) {
      this.petals.push(this.createPetal(true));
    }
  }

  resize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
  }

  createPetal(initial = false) {
    const isShower = this.mode === 'shower';
    return {
      x: Math.random() * this.width,
      y: initial ? Math.random() * this.height : -20,
      size: 9 + Math.random() * (isShower ? 8 : 11),
      speedY: (isShower ? 2.0 : 1.1) + Math.random() * (isShower ? 2.5 : 1.5),
      speedX: -0.6 + Math.random() * 1.2,
      angle: Math.random() * Math.PI * 2,
      angleSpeed: (Math.random() - 0.5) * (this.mode === 'swirl' ? 0.07 : 0.03),
      flip: Math.random() * Math.PI,
      flipSpeed: 0.02 + Math.random() * 0.03,
      alpha: 0.45 + Math.random() * 0.4
    };
  }

  animate() {
    if (this.mode === 'pause') return;

    // Wind dynamics
    if (this.mode === 'swirl') {
      this.targetWind = Math.sin(Date.now() * 0.0015) * 2.5;
    } else {
      if (Math.random() < 0.02) {
        this.targetWind = (Math.random() - 0.45) * 1.6;
      }
    }
    this.wind += (this.targetWind - this.wind) * 0.04;

    this.ctx.clearRect(0, 0, this.width, this.height);

    const theme = document.documentElement.getAttribute('data-theme') || 'light';

    for (let i = 0; i < this.petals.length; i++) {
      const p = this.petals[i];

      // Mouse deflection aerodynamics
      const dx = p.x - this.mouseX;
      const dy = p.y - this.mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120 && dist > 0) {
        const force = (120 - dist) / 120;
        p.x += (dx / dist) * force * 3;
        p.y += (dy / dist) * force * 2;
      }

      p.y += p.speedY;
      p.x += p.speedX + this.wind;
      p.angle += p.angleSpeed;
      p.flip += p.flipSpeed;

      this.ctx.save();
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate(p.angle);
      this.ctx.scale(Math.cos(p.flip), 1);

      this.ctx.beginPath();
      this.ctx.moveTo(0, -p.size);
      this.ctx.bezierCurveTo(p.size * 0.8, -p.size * 0.5, p.size * 0.7, p.size * 0.7, 0, p.size);
      this.ctx.bezierCurveTo(-p.size * 0.7, p.size * 0.7, -p.size * 0.8, -p.size * 0.5, 0, -p.size);

      // Color based on active theme
      let fillColor = `rgba(244, 114, 182, ${p.alpha})`;
      if (theme === 'dark') fillColor = `rgba(251, 113, 133, ${p.alpha})`;
      if (theme === 'sunset') fillColor = `rgba(251, 146, 60, ${p.alpha})`;
      if (theme === 'matcha') fillColor = `rgba(16, 185, 129, ${p.alpha * 0.85})`;
      if (theme === 'cyber') fillColor = `rgba(255, 42, 133, ${p.alpha})`;

      this.ctx.fillStyle = fillColor;
      this.ctx.fill();

      // Delicate center notch
      this.ctx.beginPath();
      this.ctx.arc(0, -p.size * 0.9, p.size * 0.12, 0, Math.PI * 2);
      this.ctx.fillStyle = theme === 'cyber' ? 'rgba(0, 240, 255, 0.5)' : 'rgba(225, 29, 72, 0.25)';
      this.ctx.fill();

      this.ctx.restore();

      if (p.y > this.height + 25 || p.x < -30 || p.x > this.width + 30) {
        this.petals[i] = this.createPetal(false);
      }
    }

    this.animationFrameId = requestAnimationFrame(() => this.animate());
  }

  stop() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
    this.ctx.clearRect(0, 0, this.width, this.height);
  }
}

/* ==========================================================================
   3. Blossom Click Burst Particles
   ========================================================================== */

function createBlossomBurst(targetEl) {
  if (!targetEl) return;
  const rect = targetEl.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  const particleCount = 8;
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'blossom-particle';

    const angle = (i / particleCount) * Math.PI * 2 + (Math.random() - 0.5) * 0.5;
    const distance = 35 + Math.random() * 40;
    const dx = Math.cos(angle) * distance + 'px';
    const dy = Math.sin(angle) * distance + 'px';

    particle.style.left = centerX + 'px';
    particle.style.top = centerY + 'px';
    particle.style.setProperty('--dx', dx);
    particle.style.setProperty('--dy', dy);
    particle.style.width = (7 + Math.random() * 6) + 'px';
    particle.style.height = (7 + Math.random() * 6) + 'px';
    particle.style.background = 'var(--color-sakura-deep)';

    document.body.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, 600);
  }
}

/* ==========================================================================
   4. 3D Tilt Card Effect
   ========================================================================== */

function initializeTiltCard() {
  const card = document.getElementById('hero-tilt-card');
  if (!card) return;

  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotX = -(y / (rect.height / 2)) * 7;
    const rotY = (x / (rect.width / 2)) * 7;

    card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.02, 1.02, 1.02)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  });
}

/* ==========================================================================
   5. Navigation & Mobile Drawer
   ========================================================================== */

function initializeNavigation() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const closeBtn = document.getElementById('mobile-nav-close-btn');
  const panel = document.getElementById('mobile-nav-panel');
  const overlay = document.getElementById('mobile-nav-overlay');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  function openMenu() {
    if (!panel || !overlay || !menuBtn) return;
    panel.classList.add('open');
    overlay.classList.add('open');
    menuBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    if (!panel || !overlay || !menuBtn) return;
    panel.classList.remove('open');
    overlay.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (menuBtn) menuBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (overlay) overlay.addEventListener('click', closeMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && panel?.classList.contains('open')) {
      closeMenu();
    }
  });

  // ScrollSpy
  const sections = document.querySelectorAll('section[id]');
  const desktopLinks = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        desktopLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, { rootMargin: '-20% 0px -70% 0px' });

  sections.forEach(sec => observer.observe(sec));
}

/* ==========================================================================
   6. Render Verified Skills
   ========================================================================== */

function renderSkills() {
  const container = document.getElementById('skills-container');
  if (!container) return;

  container.innerHTML = skillCategories.map(cat => `
    <div class="skill-category-card" style="--cat-accent: ${cat.accentColor}; --cat-bg: ${cat.accentBg};">
      <div class="skill-cat-header">
        <div class="skill-cat-sticker" style="background: ${cat.accentBg}; color: ${cat.accentColor}; border: 1px solid ${cat.accentColor}33;">
          <span>${cat.sticker}</span>
        </div>
        <h3 class="skill-cat-title">
          <span>${cat.title}</span>
          <span style="font-size: 1.2rem;">${cat.stickerEmoji}</span>
        </h3>
        <p class="skill-cat-desc">${cat.description}</p>
      </div>
      <ul class="skill-list">
        ${cat.skills.map(s => `
          <li>
            <div class="skill-item-card" style="border-left-color: ${cat.accentColor};">
              <div class="skill-item-top">
                <span class="skill-item-sticker-badge">${s.icon || '🌸'}</span>
                <span class="skill-item-name">${s.name}</span>
              </div>
              <div class="skill-item-context">${s.context}</div>
            </div>
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');
}

/* ==========================================================================
   7. Render Projects & Modal
   ========================================================================== */

let activeCategory = 'all';

function renderProjects() {
  const filtersContainer = document.getElementById('project-filters');
  const projectsContainer = document.getElementById('projects-container');

  if (!filtersContainer || !projectsContainer) return;

  filtersContainer.innerHTML = projectCategories.map(cat => `
    <button 
      class="filter-btn ${cat.id === activeCategory ? 'active' : ''}" 
      type="button" 
      data-filter="${cat.id}"
      role="tab"
      aria-selected="${cat.id === activeCategory ? 'true' : 'false'}"
    >
      ${cat.label}
    </button>
  `).join('');

  filtersContainer.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      activeCategory = btn.getAttribute('data-filter') || 'all';
      renderProjects();
      createBlossomBurst(btn);
    });
  });

  const filtered = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  projectsContainer.innerHTML = filtered.map(p => `
    <article class="project-card">
      <div class="project-card-header">
        <div class="project-category-meta">${p.categoryLabel}</div>
        <h3 class="project-card-title">${p.title}</h3>
        <div class="project-status-row">
          <span aria-hidden="true">⏱️</span>
          <span>${p.status}</span>
        </div>
      </div>

      <p class="project-card-summary">${p.summary}</p>

      <div class="project-tech-strip">
        ${p.technologies.map((t, idx) => `
          <span>${t}</span>${idx < p.technologies.length - 1 ? '<span class="meta-separator">·</span>' : ''}
        `).join('')}
      </div>

      <div class="project-card-footer">
        <button class="btn-card-action" type="button" data-project-id="${p.id}">
          <span>View Details & Verification</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </button>
      </div>
    </article>
  `).join('');

  projectsContainer.querySelectorAll('[data-project-id]').forEach(btn => {
    btn.addEventListener('click', () => {
      const projId = btn.getAttribute('data-project-id');
      const project = projects.find(item => item.id === projId);
      if (project) openProjectModal(project);
    });
  });
}

function initializeProjectModal() {
  const modal = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const doneBtn = document.getElementById('modal-done-btn');

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (doneBtn) doneBtn.addEventListener('click', closeModal);

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal?.classList.contains('open')) {
      closeModal();
    }
  });
}

function openProjectModal(p) {
  const modal = document.getElementById('project-modal');
  if (!modal) return;

  document.getElementById('modal-category').textContent = p.categoryLabel;
  document.getElementById('modal-project-title').textContent = p.title;
  document.getElementById('modal-status-badge').textContent = `Status: ${p.status}`;
  document.getElementById('modal-status-text').textContent = p.verificationDetails.statusNote;
  document.getElementById('modal-description').textContent = p.description;

  const highlightsEl = document.getElementById('modal-highlights');
  if (highlightsEl) {
    highlightsEl.innerHTML = p.highlights.map(h => `<li>${h}</li>`).join('');
  }

  const checklistEl = document.getElementById('modal-checklist');
  if (checklistEl) {
    checklistEl.innerHTML = p.verificationDetails.verificationChecklist.map(c => `<li>${c}</li>`).join('');
  }

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

/* ==========================================================================
   8. LinkedIn Verified Certificates Showcase
   ========================================================================== */

let activeCertCategory = 'all';

function renderCertificates() {
  const filtersContainer = document.getElementById('cert-filters');
  const gridContainer = document.getElementById('certificates-grid');

  if (!filtersContainer || !gridContainer) return;

  // Render Filter Buttons
  filtersContainer.innerHTML = certCategories.map(cat => `
    <button 
      class="filter-btn ${cat.id === activeCertCategory ? 'active' : ''}" 
      type="button" 
      data-cert-filter="${cat.id}"
      role="tab"
      aria-selected="${cat.id === activeCertCategory ? 'true' : 'false'}"
    >
      ${cat.label}
    </button>
  `).join('');

  filtersContainer.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      activeCertCategory = btn.getAttribute('data-cert-filter') || 'all';
      renderCertificates();
      createBlossomBurst(btn);
    });
  });

  // Filter Certificates
  const filtered = certificates.filter(c => {
    if (activeCertCategory === 'all') return true;
    if (activeCertCategory === 'ai-ml') return c.id.includes('ml') || c.id.includes('ai');
    if (activeCertCategory === 'data') return c.id.includes('python') || c.id.includes('sql') || c.id.includes('excel');
    if (activeCertCategory === 'hardware') return c.id.includes('arduino');
    return true;
  });

  gridContainer.innerHTML = filtered.map(c => `
    <article class="cert-card" style="--cert-color: ${c.color}; --cert-bg: ${c.colorBg};">
      <!-- Authentic Themed Hanko Seal Stamp Sticker -->
      <div class="cert-hanko-seal" style="color: ${c.color}; border-color: ${c.color};" title="Verified on LinkedIn">
        <span class="hanko-icon">💮</span>
        <span class="hanko-text">VERIFIED</span>
      </div>

      <div class="cert-card-icon-box" style="background: ${c.colorBg}; border-color: ${c.color}33;" aria-hidden="true">
        <span>${c.badgeIcon}</span>
      </div>

      <!-- Themed Topic Sticker -->
      <div class="cert-topic-sticker" style="background: ${c.colorBg}; color: ${c.color}; border: 1px solid ${c.color}33;">
        <span>${c.sticker}</span>
      </div>

      <h3 class="cert-card-title">${c.title}</h3>
      <div class="cert-card-issuer" style="color: ${c.color};">${c.issuer}</div>

      <div class="cert-skills-strip">
        ${c.skills.map(s => `
          <span class="cert-skill-tag" style="background: ${c.colorBg}; color: ${c.color};">${s}</span>
        `).join('')}
      </div>

      <div class="cert-card-footer">
        <span class="cert-credential-id">ID: ${c.credentialId}</span>
        <button class="btn-card-action" type="button" data-cert-id="${c.id}" style="color: ${c.color};">
          <span>View Credential</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </button>
      </div>
    </article>
  `).join('');

  gridContainer.querySelectorAll('[data-cert-id]').forEach(btn => {
    btn.addEventListener('click', () => {
      const certId = btn.getAttribute('data-cert-id');
      const cert = certificates.find(item => item.id === certId);
      if (cert) openCertModal(cert);
    });
  });
}

function initializeCertModal() {
  const modal = document.getElementById('cert-modal');
  const closeBtn = document.getElementById('cert-modal-close-btn');
  const doneBtn = document.getElementById('cert-modal-done-btn');

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (doneBtn) doneBtn.addEventListener('click', closeModal);

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal?.classList.contains('open')) {
      closeModal();
    }
  });
}

function openCertModal(c) {
  const modal = document.getElementById('cert-modal');
  if (!modal) return;

  const currentLinkedInUrl = getLinkedInUrl();

  document.getElementById('cert-modal-icon').textContent = c.badgeIcon;
  document.getElementById('cert-modal-title').textContent = c.title;
  document.getElementById('cert-modal-issuer').textContent = `${c.issuer} (${c.platform})`;
  document.getElementById('cert-modal-id').textContent = c.credentialId;
  document.getElementById('cert-modal-date').textContent = c.issueDate;

  const skillsEl = document.getElementById('cert-modal-skills');
  if (skillsEl) {
    skillsEl.innerHTML = c.skills.map(s => `<li>${s}</li>`).join('');
  }

  const linkEl = document.getElementById('cert-modal-linkedin-link');
  if (linkEl) {
    linkEl.href = currentLinkedInUrl;
  }

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

/* ==========================================================================
   9. LinkedIn Activity Stream & Profile URL Manager
   ========================================================================== */

const LINKEDIN_URL_KEY = 'subham_kumar_linkedin_url';

function getLinkedInUrl() {
  return localStorage.getItem(LINKEDIN_URL_KEY) || personalInfo.social.linkedin.url;
}

function updateLinkedInLinks(url) {
  const targets = [
    'hero-linkedin-link',
    'linkedin-banner-link',
    'mobile-linkedin-btn',
    'footer-linkedin-link',
    'cert-modal-linkedin-link'
  ];

  targets.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.href = url;
  });
}

function renderLinkedInActivities() {
  const grid = document.getElementById('linkedin-feed-grid');
  if (!grid) return;

  grid.innerHTML = linkedInActivities.map(act => `
    <article class="linkedin-card">
      <div class="linkedin-card-header">
        <div class="linkedin-card-badge">
          <span>${act.icon}</span>
          <span>${act.type}</span>
        </div>
        <span class="linkedin-card-date">${act.date}</span>
      </div>

      <h4 class="linkedin-card-title">${act.title}</h4>
      <p class="linkedin-card-body">${act.content}</p>

      <div class="linkedin-card-tags">
        ${act.tags.map(t => `<span>${t}</span>`).join('')}
      </div>

      <div class="linkedin-card-footer">
        <div style="display: flex; gap: 1rem;">
          <span>👍 ${act.reactions} Reactions</span>
          <span>💬 ${act.comments} Comments</span>
        </div>
        <a href="${getLinkedInUrl()}" target="_blank" rel="noopener noreferrer" style="color: #0A66C2; font-weight: 600; display: inline-flex; align-items: center; gap: 0.25rem;">
          <span>Discuss</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline></svg>
        </a>
      </div>
    </article>
  `).join('');
}

function initializeLinkedInLinks() {
  const currentUrl = personalInfo.social.linkedin.url;
  updateLinkedInLinks(currentUrl);
}

/* ==========================================================================
   10. Real GitHub API Integration
   ========================================================================== */

async function fetchGitHubRepositories() {
  const container = document.getElementById('github-repos-container');
  if (!container) return;

  const username = personalInfo.social.github.username;

  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`, {
      headers: { 'Accept': 'application/vnd.github.v3+json' }
    });

    if (!response.ok) {
      throw new Error(`GitHub API returned status ${response.status}`);
    }

    const repos = await response.json();

    if (!Array.isArray(repos) || repos.length === 0) {
      container.innerHTML = `
        <div class="repo-state-box">
          <p>No public repositories found for <strong>${username}</strong> yet.</p>
          <a href="https://github.com/${username}/" target="_blank" rel="noopener noreferrer" class="btn-secondary" style="margin-top: 1rem; display: inline-flex;">
            Browse GitHub Profile
          </a>
        </div>
      `;
      return;
    }

    container.innerHTML = repos.map(repo => `
      <article class="repo-card">
        <h4 class="repo-card-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
          <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" style="color: inherit;">
            ${repo.name}
          </a>
        </h4>

        <p class="repo-card-desc">
          ${repo.description || 'Public repository maintained by Subham Kumar.'}
        </p>

        <div class="repo-meta-row">
          <div>
            ${repo.language ? `
              <span class="repo-lang-dot"></span>
              <span>${repo.language}</span>
            ` : '<span>General</span>'}
          </div>

          <div style="display: flex; gap: 0.85rem;">
            <span title="Stars" class="tabular-nums">★ ${repo.stargazers_count}</span>
            <span title="Forks" class="tabular-nums">⑂ ${repo.forks_count}</span>
          </div>
        </div>
      </article>
    `).join('');

  } catch (error) {
    container.innerHTML = `
      <div class="repo-state-box">
        <p style="margin-bottom: 0.5rem; font-weight: 600; color: var(--color-text-primary);">
          GitHub API Live Sync Notice
        </p>
        <p style="font-size: 0.875rem; margin-bottom: 1.25rem;">
          Rate limit reached or network request throttled. You can explore all public repositories directly on Subham's official profile.
        </p>
        <a href="https://github.com/${username}/" target="_blank" rel="noopener noreferrer" class="btn-primary" style="display: inline-flex;">
          <span>Explore Subham's Repositories on GitHub</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
        </a>
      </div>
    `;
  }
}

/* ==========================================================================
   11. Contact Module
   ========================================================================== */

function showToast(msg) {
  const toast = document.getElementById('toast-notice');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

function initializeContact() {
  const form = document.getElementById('contact-form');
  const alertBox = document.getElementById('form-status-alert');
  const submitBtn = document.getElementById('contact-submit-btn');
  const copyBtn = document.getElementById('copy-email-btn');

  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(personalInfo.contact.email);
        showToast(`Copied ${personalInfo.contact.email} to clipboard!`);
        createBlossomBurst(copyBtn);
      } catch {
        showToast(`Email: ${personalInfo.contact.email}`);
      }
    });
  }

  function showAlert(type, html) {
    if (!alertBox) return;
    alertBox.className = `form-status-alert ${type}`;
    alertBox.innerHTML = html;
  }

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('contact-name');
      const emailInput = document.getElementById('contact-email');
      const subjectInput = document.getElementById('contact-subject');
      const messageInput = document.getElementById('contact-message');

      const name = nameInput?.value.trim() || '';
      const email = emailInput?.value.trim() || '';
      const subject = subjectInput?.value.trim() || '';
      const message = messageInput?.value.trim() || '';

      if (!name) {
        showAlert('error', 'Please enter your name.');
        nameInput?.focus();
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !emailRegex.test(email)) {
        showAlert('error', 'Please enter a valid email address.');
        emailInput?.focus();
        return;
      }

      if (!subject) {
        showAlert('error', 'Please enter a subject.');
        subjectInput?.focus();
        return;
      }

      if (!message || message.length < 10) {
        showAlert('error', 'Please enter a message with at least 10 characters.');
        messageInput?.focus();
        return;
      }

      const originalBtnHtml = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>Sending...</span>`;

      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, subject, message })
        });

        const data = await response.json().catch(() => ({}));

        if (response.ok && data.success) {
          showAlert('success', `
            <strong>Message Delivered!</strong> Thank you, ${name}. Your message has been sent to Subham Kumar (${personalInfo.contact.email}).
          `);
          form.reset();
          createBlossomBurst(submitBtn);
        } else {
          const encodedSubject = encodeURIComponent(`[Portfolio Inquiry] ${subject}`);
          const encodedBody = encodeURIComponent(`Hi Subham,\n\nFrom: ${name} (${email})\n\n${message}`);
          const mailtoFallback = `mailto:${personalInfo.contact.email}?subject=${encodedSubject}&body=${encodedBody}`;

          const serverMsg = data.message || 'Server email transport is currently awaiting SMTP/API key configuration.';

          showAlert('info', `
            <div style="font-weight: 700; margin-bottom: 0.35rem;">Email Transport Status</div>
            <p style="margin-bottom: 0.75rem;">${serverMsg}</p>
            <p style="margin-bottom: 0.75rem;">
              Click below to send your pre-filled message directly from your device's mail app:
            </p>
            <a href="${mailtoFallback}" class="btn-primary" style="display: inline-flex; padding: 0.5rem 1rem; font-size: 0.8125rem;">
              <span>Send via Email Client Now</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </a>
          `);
        }
      } catch (err) {
        const encodedSubject = encodeURIComponent(`[Portfolio Inquiry] ${subject}`);
        const encodedBody = encodeURIComponent(`Hi Subham,\n\nFrom: ${name} (${email})\n\n${message}`);
        const mailtoFallback = `mailto:${personalInfo.contact.email}?subject=${encodedSubject}&body=${encodedBody}`;

        showAlert('info', `
          <div style="font-weight: 700; margin-bottom: 0.35rem;">Static Environment Note</div>
          <p style="margin-bottom: 0.75rem;">
            Direct server API endpoint not reachable in this static deployment. Send directly to Subham's verified mailbox with your details pre-filled:
          </p>
          <a href="${mailtoFallback}" class="btn-primary" style="display: inline-flex; padding: 0.5rem 1rem; font-size: 0.8125rem;">
            <span>Send via Email Client (${personalInfo.contact.email})</span>
          </a>
        `);
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHtml;
      }
    });
  }
}

/* ==========================================================================
   12. Application Initialization
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Multi-Theme System
  initializeThemeSystem();

  // 2. Start Sakura Canvas Engine
  new SakuraEngine('sakura-canvas');

  // 3. 3D Tilt Card
  initializeTiltCard();

  // 4. Navigation & ScrollSpy
  initializeNavigation();

  // 5. Populate Skills
  renderSkills();

  // 6. Populate Projects & Filters
  renderProjects();
  initializeProjectModal();

  // 7. Populate LinkedIn Verified Certificates
  renderCertificates();
  initializeCertModal();

  // 8. Populate LinkedIn Activity Stream & Links
  renderLinkedInActivities();
  initializeLinkedInLinks();

  // 9. Live GitHub API Sync
  fetchGitHubRepositories();

  // 10. Contact Form Handling
  initializeContact();

  // 11. Update Copyright Year
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear().toString();
  }
});
