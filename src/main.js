/* Portfolify — shared data + interactivity, used across all pages */

// ---------- DATA ----------
const stack = [
  { name: 'HTML5 & Semantic Web', tag: 'ARIA / Structure', level: 95 },
  { name: 'CSS3 & Tailwind CSS', tag: 'Design Systems / Utility-First', level: 90 },
  { name: 'JavaScript (ES6+)', tag: 'Async / DOM Operations', level: 80 },
  { name: 'Responsive Web Design', tag: 'Mobile-First / Adaptive Layouts', level: 85 },
  { name: 'Git & Version Control', tag: 'CI/CD Workflows / Pull Requests', level: 85 },
];

const projects = [
  { t: 'NSK Sport Store', cat: 'Web Development', badge: 'E-Commerce · UI Redesign', desc: 'E-commerce interface for a local sports retail brand featuring product filters and a streamlined checkout flow.', tech: ['Tailwind CSS', 'JavaScript'], image: 'picture/NLSK%20project.jpg' },
  { t: 'Student Portfolio Website', cat: 'Web Development', badge: 'Featured Showcase', desc: 'Comprehensive personal developer portfolio and multi-section frontend engineering system, built with modular UI.', tech: ['HTML5', 'Tailwind CSS'], image: 'picture/student%20portfolio.jpg' },
  { t: 'TaskFlow Minimalist Manager', cat: 'UX/UI Design', badge: 'Product Design', desc: 'Minimalist personal productivity app engineered for fast task capture and drag-and-drop reordering.', tech: ['Figma', 'Design System'], image: 'picture/TaskFlow%20Minimalist%20Planner.jpg' },
  { t: 'Scholarship Portal UI', cat: 'UX/UI Design', badge: 'UX/UI Design Refresh', desc: 'Highly accessible and component-driven UI designed for fair academic scholarship applications.', tech: ['Figma', 'WCAG AA'], image: 'picture/Scholarship%20Portal%20UI.jpg' },
  { t: 'Compact Event Finder', cat: 'Web Development', badge: 'Compact Systems', desc: 'Lightweight event discovery tool built for browsing and quick registration on mobile networks.', tech: ['JavaScript', 'Tailwind CSS'], image: 'picture/Campus%20Event%20Finder.jpg' },
  { t: 'Library Resource Tracker', cat: 'Database & Other', badge: 'Database Systems', desc: 'Internal database inventory tool for book lending, returns, and automated overdue reminders.', tech: ['SQL', 'PHP'], image: 'picture/library%20resource%20tracker.jpg' },
];

const timeline = [
  { y: '2023', t: 'Foundations & CS Basics', d: 'Mastered algorithmic thinking, object-oriented concepts, and memory structures using C++ and Python. Solved 50+ algorithmic challenges and built basic data management tools.', tags: [], tag2: '' },
  { y: '2024', t: 'Frontend & Web Architecture', d: 'Transitioned internally into modern browser standards; asynchronous JavaScript, ES6+ tooling, and fluid CSS architecture, working fluently with semantic HTML principles.', tags: ['ES6+', 'Modern CSS', 'Fluid CSS Architecture'], tag2: '' },
  { y: '2025', t: 'Full Stack Projects & UI Systems', d: 'Constructing multiple full-featured web apps utilizing ReactJS, TypeScript, tailwind CSS. Implementing component systems, client-side rendering, and custom hook logic.', tags: ['TypeScript', 'React', 'Tailwind CSS'], tag2: 'In Progress', hl: true },
];

const hobbies = ['Web Performance', 'UI Design Systems', 'Open Source Contribution', 'Tech Podcasts', 'Cycling', 'Specialty Coffee'];

const roadmap = [
  { t: 'Next.js Framework', d: 'App Router, SSR strategies, and edge SSR deployments.' },
  { t: 'TypeScript (Strict Typing)', d: 'Generics, interfaces, and compile-time contract enforcement.' },
  { t: 'Figma Design Systems', d: 'Auto-layout tokens, atomic variants, and spec handoffs.' },
];

const softskills = [
  { t: 'Communication', d: 'Clear technical documentation and proactive stakeholder briefs.' },
  { t: 'Teamwork & Pair Dev', d: 'Collaborative code reviews and synchronous pairing sessions.' },
  { t: 'Problem Solving', d: 'Methodical bug isolation, profiling, and root-cause fixes.' },
  { t: 'Time Management', d: 'Structured agile iterations with reliable sprint deliverables.' },
];

// ---------- SHARED RENDER HELPERS ----------
function projectCard(p) {
  return `<div class="bg-white border border-silver/40 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group">
    <div class="h-36 bg-lavtint flex items-center justify-center relative">
      <span class="absolute top-3 left-3 text-[10px] font-semibold bg-white/90 px-2 py-1 rounded-full text-slate">${p.badge}</span>
      <img class="h-full w-full object-cover group-hover:scale-105 transition-transform" src="${p.image}" alt="${p.t}">
    </div>
    <div class="p-5">
      <p class="text-[10px] font-semibold uppercase text-crimson mb-1">${p.cat}</p>
      <h3 class="font-bold mb-1.5">${p.t}</h3>
      <p class="text-xs text-granite mb-3 leading-relaxed">${p.desc}</p>
      <div class="flex flex-wrap gap-1.5 mb-3">${p.tech.map(t => `<span class="text-[10px] font-medium bg-lavtint text-slate px-2 py-1 rounded-md">${t}</span>`).join('')}</div>
      <span class="text-crimson text-xs font-semibold">View Case Study →</span>
    </div>
  </div>`;
}

// ---------- PAGE-SPECIFIC RENDERERS (each checks the target exists before running) ----------
function renderHome() {
  const statsEl = document.getElementById('homeStats');
  if (!statsEl) return;
  statsEl.innerHTML = `
    <div class="bg-white border border-silver/40 rounded-2xl p-5 flex gap-4 items-center shadow-sm"><div class="w-11 h-11 rounded-xl bg-lavtint flex items-center justify-center text-crimson"><i class="fa-solid fa-star"></i></div><div><p class="text-xl font-extrabold">3.85</p><p class="text-xs text-granite">GPA · Dean's Honor List, Royal University of Phnom Penh</p></div></div>
    <div class="bg-white border border-silver/40 rounded-2xl p-5 flex gap-4 items-center shadow-sm"><div class="w-11 h-11 rounded-xl bg-lavtint flex items-center justify-center text-crimson"><i class="fa-solid fa-diagram-project"></i></div><div><p class="text-xl font-extrabold">12+</p><p class="text-xs text-granite">Completed Projects · Personal &amp; internship mockups</p></div></div>
    <div class="bg-white border border-silver/40 rounded-2xl p-5 flex gap-4 items-center shadow-sm"><div class="w-11 h-11 rounded-xl bg-lavtint flex items-center justify-center text-crimson"><i class="fa-solid fa-award"></i></div><div><p class="text-xl font-extrabold">4</p><p class="text-xs text-granite">Certifications · Web standards &amp; UI/UX foundations</p></div></div>`;

  document.getElementById('stackBars').innerHTML = stack.map(s => `
    <div>
      <div class="flex justify-between text-sm mb-1.5"><span class="font-medium"><i class="fa-solid fa-square text-crimson text-[8px] mr-2"></i>${s.name} <span class="text-granite text-xs font-normal">— ${s.tag}</span></span><span class="text-granite text-xs">${s.level}%</span></div>
      <div class="h-1.5 rounded-full bg-lavtint overflow-hidden"><div class="bar h-full rounded-full bg-crimson" style="width:${s.level}%"></div></div>
    </div>`).join('');

  document.getElementById('homeProjects').innerHTML = projects.slice(0, 3).map(projectCard).join('');
}

function renderAbout() {
  const el = document.getElementById('timeline');
  if (!el) return;
  el.innerHTML = timeline.map(t => `
    <div class="flex gap-4 ${t.hl ? 'bg-rose/40 rounded-xl p-4 -mx-1' : ''}">
      <div class="w-8 h-8 rounded-full bg-crimson text-white flex items-center justify-center text-xs font-bold shrink-0"><i class="fa-solid fa-graduation-cap"></i></div>
      <div class="flex-1">
        <div class="flex flex-wrap items-center gap-2 mb-1"><h4 class="font-bold text-sm">${t.t}</h4><span class="text-[10px] text-granite">${t.y}</span>${t.tag2 ? `<span class="text-[10px] font-semibold bg-crimson text-white px-2 py-0.5 rounded-full">${t.tag2}</span>` : ''}</div>
        <p class="text-xs text-granite leading-relaxed mb-2">${t.d}</p>
        ${t.tags.length ? `<div class="flex flex-wrap gap-1.5">${t.tags.map(x => `<span class="text-[10px] font-medium bg-lavtint text-slate px-2 py-1 rounded-md">${x}</span>`).join('')}</div>` : ''}
      </div>
    </div>`).join('');

  document.getElementById('hobbies').innerHTML = hobbies.map(h => `<span class="text-xs font-medium bg-lavtint text-slate px-3 py-1.5 rounded-full">${h}</span>`).join('');
}

function renderSkills() {
  const el = document.getElementById('skillStats');
  if (!el) return;
  el.innerHTML = `
    <div class="bg-white border border-silver/40 rounded-2xl p-5 shadow-sm"><i class="fa-solid fa-layer-group text-crimson mb-2"></i><p class="text-xl font-extrabold">5+</p><p class="text-xs text-granite">Core Stacks · Production-ready frameworks &amp; build primitives</p></div>
    <div class="bg-white border border-silver/40 rounded-2xl p-5 shadow-sm"><i class="fa-solid fa-chart-line text-crimson mb-2"></i><p class="text-xl font-extrabold">87%</p><p class="text-xs text-granite">Proficiency Index · Aggregate practical domain benchmark</p></div>
    <div class="bg-white border border-silver/40 rounded-2xl p-5 shadow-sm"><i class="fa-solid fa-medal text-crimson mb-2"></i><p class="text-xl font-extrabold">02</p><p class="text-xs text-granite">Academic Honors · Excellence citations &amp; faculty merit awards</p></div>
    <div class="bg-white border border-silver/40 rounded-2xl p-5 shadow-sm"><i class="fa-solid fa-universal-access text-crimson mb-2"></i><p class="text-xl font-extrabold">Clean &amp; Accessible</p><p class="text-xs text-granite">Code Architecture · WCAG 2.1 AA compliant</p></div>`;

  document.getElementById('roadmap').innerHTML = roadmap.map(r => `
    <div class="flex justify-between items-start gap-3 border-b border-silver/30 pb-4 last:border-0 last:pb-0">
      <div><p class="font-semibold text-sm mb-1"><i class="fa-solid fa-rocket text-crimson mr-2"></i>${r.t}</p><p class="text-xs text-granite">${r.d}</p></div>
      <span class="text-[10px] font-semibold bg-rose text-darkcrimson px-2 py-1 rounded-full whitespace-nowrap">In Progress</span>
    </div>`).join('');

  document.getElementById('softskills').innerHTML = softskills.map(s => `
    <div class="bg-lavtint rounded-xl p-4"><i class="fa-solid fa-people-arrows text-crimson mb-2"></i><p class="font-semibold text-sm mb-1">${s.t}</p><p class="text-[11px] text-granite leading-relaxed">${s.d}</p></div>`).join('');
}

const cats = ['All', 'Web Development', 'UX/UI Design', 'Database & Other'];
let activeCat = 'All';
function renderFilters() {
  document.getElementById('projFilters').innerHTML = cats.map(c => `
    <button data-cat="${c}" class="filterBtn text-xs font-semibold px-4 py-2 rounded-full border transition-colors ${c === activeCat ? 'bg-crimson border-crimson text-white' : 'border-silver text-granite hover:border-crimson hover:text-crimson'}">${c}</button>`).join('');
  document.querySelectorAll('.filterBtn').forEach(b => b.addEventListener('click', () => { activeCat = b.dataset.cat; renderFilters(); renderProjectGrid(); }));
}
function renderProjectGrid() {
  const q = (document.getElementById('projectSearch')?.value || '').toLowerCase();
  const list = projects.filter(p => (activeCat === 'All' || p.cat === activeCat) && (p.t.toLowerCase().includes(q) || p.tech.join(' ').toLowerCase().includes(q)));
  document.getElementById('projectGrid').innerHTML = list.map(projectCard).join('') || '<p class="text-sm text-granite col-span-3">No projects match your search.</p>';
}
function renderProjectsPage() {
  const el = document.getElementById('projFilters');
  if (!el) return;
  renderFilters();
  renderProjectGrid();
  document.getElementById('projectSearch').addEventListener('input', renderProjectGrid);
}

function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  const msgBox = document.getElementById('msgBox');
  msgBox.addEventListener('input', e => { document.getElementById('charCount').textContent = e.target.value.length + ' / 500'; });
  form.addEventListener('submit', e => {
    e.preventDefault();
    const status = document.getElementById('formStatus');
    status.style.opacity = '1';
    form.reset();
    document.getElementById('charCount').textContent = '0 / 500';
    setTimeout(() => status.style.opacity = '0', 3500);
  });
}

// ---------- SHARED UI: mobile menu + entrance animation ----------
function initMobileMenu() {
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if (!menuBtn || !mobileMenu) return;
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex');
  });
}

function animateIn() {
  document.querySelectorAll('.bar').forEach((b, i) => {
    setTimeout(() => b.classList.add('in'), 100 + i * 60);
  });
  document.querySelectorAll('.fade').forEach((f, i) => {
    setTimeout(() => f.classList.add('in'), i * 80);
  });
}

// ---------- INIT ----------
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  renderHome();
  renderAbout();
  renderSkills();
  renderProjectsPage();
  initContactForm();
  animateIn();
});
