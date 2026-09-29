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
  {
    t: 'project_nsk_title',
    cat: 'web_development',
    badge: 'project_nsk_badge',
    desc: 'project_nsk_desc',
    tech: ['Tailwind CSS', 'JavaScript'],
    image: 'picture/NLSK%20project.jpg'
  },

  {
    t: 'project_portfolio_title',
    cat: 'web_development',
    badge: 'project_portfolio_badge',
    desc: 'project_portfolio_desc',
    tech: ['HTML5', 'Tailwind CSS'],
    image: 'picture/student%20portfolio.jpg'
  },

  {
    t: 'project_taskflow_title',
    cat: 'ux_ui_design',
    badge: 'project_taskflow_badge',
    desc: 'project_taskflow_desc',
    tech: ['Figma', 'Design System'],
    image: 'picture/TaskFlow%20Minimalist%20Planner.jpg'
  },

  {
    t: 'project_scholarship_title',
    cat: 'ux_ui_design',
    badge: 'project_scholarship_badge',
    desc: 'project_scholarship_desc',
    tech: ['Figma', 'WCAG AA'],
    image: 'picture/Scholarship%20Portal%20UI.jpg'
  },

  {
    t: 'project_event_title',
    cat: 'web_development',
    badge: 'project_event_badge',
    desc: 'project_event_desc',
    tech: ['JavaScript', 'Tailwind CSS'],
    image: 'picture/Campus%20Event%20Finder.jpg'
  },

  {
    t: 'project_library_title',
    cat: 'database_other',
    badge: 'project_library_badge',
    desc: 'project_library_desc',
    tech: ['SQL', 'PHP'],
    image: 'picture/library%20resource%20tracker.jpg'
  }
];

const timeline = [
  {
    y: '2023',
    t: 'milestone_2023_title',
    d: 'milestone_2023_desc',
    tags: [],
    tag2: ''
  },
  {
    y: '2024',
    t: 'milestone_2024_title',
    d: 'milestone_2024_desc',
    tags: ['ES6+', 'Modern CSS', 'Fluid CSS Architecture'],
    tag2: ''
  },
  {
    y: '2025',
    t: 'milestone_2025_title',
    d: 'milestone_2025_desc',
    tags: ['TypeScript', 'React', 'Tailwind CSS'],
    tag2: 'in_progress',
    hl: true
  }
];

const hobbies = ['Web Performance', 'UI Design Systems', 'Open Source Contribution', 'Tech Podcasts', 'Cycling', 'Specialty Coffee'];

const roadmap = [
  {
    t: 'roadmap_nextjs_title',
    d: 'roadmap_nextjs_desc'
  },
  {
    t: 'roadmap_typescript_title',
    d: 'roadmap_typescript_desc'
  },
  {
    t: 'roadmap_figma_title',
    d: 'roadmap_figma_desc'
  }
];

const softskills = [
  {
    t: 'soft_communication_title',
    d: 'soft_communication_desc'
  },
  {
    t: 'soft_teamwork_title',
    d: 'soft_teamwork_desc'
  },
  {
    t: 'soft_problem_solving_title',
    d: 'soft_problem_solving_desc'
  },
  {
    t: 'soft_time_management_title',
    d: 'soft_time_management_desc'
  }
];

let currentLang = 'en';

// ---------- SHARED RENDER HELPERS ----------
function projectCard(p) {



  const lang = translations[currentLang];

  return `
    <div class="bg-white border border-silver/40 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group">

      <div class="h-36 bg-lavtint flex items-center justify-center relative">

        <span class="absolute top-3 left-3 text-[10px] font-semibold bg-white/90 px-2 py-1 rounded-full text-slate">
          ${lang[p.badge]}
        </span>

        <img
          class="h-full w-full object-cover group-hover:scale-105 transition-transform"
          src="${p.image}"
          alt="${lang[p.t]}"
        >

      </div>

      <div class="p-5">

        <p class="text-[10px] font-semibold uppercase text-crimson mb-1">
          ${lang[p.cat]}
        </p>

        <h3 class="font-bold mb-1.5">
          ${lang[p.t]}
        </h3>

        <p class="text-xs text-granite mb-3 leading-relaxed">
          ${lang[p.desc]}
        </p>

        <div class="flex flex-wrap gap-1.5 mb-3">
          ${p.tech.map(t => `
            <span class="text-[10px] font-medium bg-lavtint text-slate px-2 py-1 rounded-md">
              ${t}
            </span>
          `).join('')}
        </div>

        <span class="text-crimson text-xs font-semibold">
          ${lang.view_case_study}
        </span>

      </div>
    </div>
  `;
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

  const lang = translations[currentLang];

  el.innerHTML = timeline.map(t => `
    <div class="flex gap-4 ${t.hl ? 'bg-rose/40 rounded-xl p-4 -mx-1' : ''}">
      
      <div class="w-8 h-8 rounded-full bg-crimson text-white flex items-center justify-center text-xs font-bold shrink-0">
        <i class="fa-solid fa-graduation-cap"></i>
      </div>

      <div class="flex-1">

        <div class="flex flex-wrap items-center gap-2 mb-1">

          <h4 class="font-bold text-sm">
            ${lang[t.t]}
          </h4>

          <span class="text-[10px] text-granite">
            ${t.y}
          </span>

          ${t.tag2
      ? `<span class="text-[10px] font-semibold bg-crimson text-white px-2 py-0.5 rounded-full">
                  ${lang[t.tag2]}
                </span>`
      : ''
    }

        </div>

        <p class="text-xs text-granite leading-relaxed mb-2">
          ${lang[t.d]}
        </p>

        ${t.tags.length
      ? `
              <div class="flex flex-wrap gap-1.5">
                ${t.tags.map(x => `
                  <span class="text-[10px] font-medium bg-lavtint text-slate px-2 py-1 rounded-md">
                    ${x}
                  </span>
                `).join('')}
              </div>
            `
      : ''
    }

      </div>
    </div>
  `).join('');
}
function renderSkills() {
  const el = document.getElementById('skillStats');
  const lang = translations[currentLang];
  if (!el) return;
  // Skill Stats
  el.innerHTML = `
    <div class="bg-white border border-silver/40 rounded-2xl p-5 shadow-sm">
      <i class="fa-solid fa-layer-group text-crimson mb-2"></i>
      <p class="text-xl font-extrabold">5+</p>
      <p class="text-xs text-granite">
        ${lang.Core_Stacks} · ${lang.Core_Stacks_Desc}
      </p>
    </div>
    <div class="bg-white border border-silver/40 rounded-2xl p-5 shadow-sm">
      <i class="fa-solid fa-chart-line text-crimson mb-2"></i>
      <p class="text-xl font-extrabold">87%</p>
      <p class="text-xs text-granite">
        ${lang.Proficiency_Index} · ${lang.Proficiency_Index_Desc}
      </p>
    </div>
    <div class="bg-white border border-silver/40 rounded-2xl p-5 shadow-sm">
      <i class="fa-solid fa-medal text-crimson mb-2"></i>
      <p class="text-xl font-extrabold">02</p>
      <p class="text-xs text-granite">
        ${lang.Academic_Honors} · ${lang.Academic_Honors_Desc}
      </p>
    </div>
    <div class="bg-white border border-silver/40 rounded-2xl p-5 shadow-sm">
      <i class="fa-solid fa-universal-access text-crimson mb-2"></i>
      <p class="text-xl font-extrabold">
        ${lang.Clean_Accessible}
      </p>
      <p class="text-xs text-granite">
        ${lang.Code_Architecture} · ${lang.Code_Architecture_Desc}
      </p>
    </div>
  `;
  // Learning Roadmap
  document.getElementById('roadmap').innerHTML = roadmap.map(r => `
    <div class="flex justify-between items-start gap-3 border-b border-silver/30 pb-4 last:border-0 last:pb-0">
      <div>
        <p class="font-semibold text-sm mb-1">
          <i class="fa-solid fa-rocket text-crimson mr-2"></i>
          ${lang[r.t]}
        </p>

        <p class="text-xs text-granite">
          ${lang[r.d]}
        </p>
      </div>
      <span class="text-[10px] font-semibold bg-rose text-darkcrimson px-2 py-1 rounded-full whitespace-nowrap">
        ${lang.in_progress}
      </span>
    </div>
  `).join('');

  // Soft Skills
  document.getElementById('softskills').innerHTML = softskills.map(s => `
    <div class="bg-lavtint rounded-xl p-4">

      <i class="fa-solid fa-people-arrows text-crimson mb-2"></i>

      <p class="font-semibold text-sm mb-1">
        ${lang[s.t]}
      </p>

      <p class="text-[11px] text-granite leading-relaxed">
        ${lang[s.d]}
      </p>

    </div>
  `).join('');
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
// Get a free access key at https://web3forms.com (enter your email, key arrives in your inbox)
const WEB3FORMS_ACCESS_KEY = 'YOUR_ACCESS_KEY_HERE';
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  const counter = document.getElementById('charCount');
  const message = document.getElementById('msgBox');
  const status = document.getElementById('formStatus');
  const btn = document.getElementById('submitBtn');
  const showStatus = (text, ok) => {
    status.textContent = text;
    status.classList.remove('text-irish', 'text-crimson', 'opacity-0');
    status.classList.add(ok ? 'text-irish' : 'text-crimson');
  };
  // Character counter
  if (message && counter) {
    message.addEventListener('input', () => {
      counter.textContent = `${message.value.length} / 500`;
    });
  }
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const t = translations[currentLang];

    const data = new FormData(form);
    data.append('access_key', 'd6d6ffe4-5f0c-4117-aaa6-5513e1810459');
    data.append('subject', `Portfolio contact: ${data.get('category')} (from ${data.get('name')})`);
    data.append('from_name', 'Portfolio Website');
    const originalBtn = btn.innerHTML;
    btn.disabled = true;
    btn.classList.add('opacity-60', 'cursor-not-allowed');
    btn.textContent = t.form_sending;
    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data });
      const json = await res.json();

      if (res.ok && json.success) {
        showStatus(t.form_success, true);
        form.reset();
        if (counter) counter.textContent = '0 / 500';
      } else {
        showStatus(t.form_error, false);
      }
    } catch (err) {
      showStatus(t.form_error, false);
    } finally {
      btn.disabled = false;
      btn.classList.remove('opacity-60', 'cursor-not-allowed');
      btn.innerHTML = originalBtn;
    }
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
// Toggle dropdown visibility
function toggleDropdown() {
  const menu = document.getElementById('lang-menu');
  menu.classList.toggle('hidden');
}
// ១. ប្រភពទិន្នន័យពាក្យបកប្រែ (Translation Dictionary)
const translations = {
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_contact: "Contact",
    tagline: "SENIOR WEB DEVELOPMENT · CS ENGINEER",
    hero_title: "Building Modern Web Experiences with Code & Passion.",
    hero_desc: "I am a passionate Web Development student who enjoys learning new technologies, building accessible websites, and engineering scalable technical skills.",
    btn_projects: "View My Projects",
    btn_contact: "Contact Me",
    get_in_touch: "Get in Touch",
    contact_desc: "Please fill out the form below to get in touch with me. I will respond within 24 hours.",
    name_label: "Name",
    email_label: "Email",
    message_label: "Message",
    submit_btn: "Send Message",
    char_count: "Character Count",
    form_success: "Your message has been sent successfully! I will get back to you shortly.",
    hero_role: "Web Developer · Computer Science Engineer",
    build_modern: "Building Modern Web Experiencess",
    hero_desc: "I am a passionate Web Development student who enjoys learning new technologies, building accessible websites, and engineering scalable technical skills. Focused on user-first digital engineering and clean modular software architecture.",
    view_projects: "View My Projects",
    contact_me: "Contact Me",
    technical_Proficiency: "Technical Proficiency",
    core_engineering_stack: "Core Engineering Stack",
    selected_work: "selected work",
    featured_projects: "Featured Engineering Projects",
    explore_projects: "Explore All Projects",
    Open_for_Internships: "Open for Internships 2027",
    let_colaborate: "Let's collaborate on your next project.",
    internship_desc: "I'm actively seeking junior frontend engineering roles, web development internships, and UI/UX design opportunities for 2027. If you're looking for a motivated and skilled developer to join your team, please reach out to discuss potential collaborations.",
    // Project categories
    web_development: "Web Development",
    ux_ui_design: "UX/UI Design",
    database_other: "Database & Other",
    // NSK Sport Store
    project_nsk_title: "NSK Sport Store",
    project_nsk_badge: "E-Commerce · UI Redesign",
    project_nsk_desc: "E-commerce interface for a local sports retail brand featuring product filters and a streamlined checkout flow.",
    // Student Portfolio
    project_portfolio_title: "Student Portfolio Website",
    project_portfolio_badge: "Featured Showcase",
    project_portfolio_desc: "Comprehensive personal developer portfolio and multi-section frontend engineering system, built with modular UI.",
    // TaskFlow
    project_taskflow_title: "TaskFlow Minimalist Manager",
    project_taskflow_badge: "Product Design",
    project_taskflow_desc: "Minimalist personal productivity app engineered for fast task capture and drag-and-drop reordering.",
    // Scholarship
    project_scholarship_title: "Scholarship Portal UI",
    project_scholarship_badge: "UX/UI Design Refresh",
    project_scholarship_desc: "Highly accessible and component-driven UI designed for fair academic scholarship applications.",
    // Event Finder
    project_event_title: "Compact Event Finder",
    project_event_badge: "Compact Systems",
    project_event_desc: "Lightweight event discovery tool built for browsing and quick registration on mobile networks.",
    // Library
    project_library_title: "Library Resource Tracker",
    project_library_badge: "Database Systems",
    project_library_desc: "Internal database inventory tool for book lending, returns, and automated overdue reminders.",
    view_case_study: "View Case Study →",
    Student_Portfolio_Education: "Student Profile &amp; Education",
    Academic_Projects: "Academic Journey &amp; Background",
    Verified_Projects: "Verified Engineering Student — CS Dept.",
    name: "Sambath Y",
    intern_2027: "Internships 2027",
    commitment: "I believe the standout moments in technology occur where engineered performance meets tactile, delightful interaction. Currently based in Phnom Penh, Iimmerse myself in turning complex layouts into seamless, accessible web applications.",
    base_location: "Base location",
    location: "Phomn Penh, Cambodia",
    Academic_program: "B.S. Computer Science",
    Availability: "Availability",
    B_S_Computer_Science: "B.S. Computer Science",
    Open_for_Internships: "Open, Internship",
    Download_CV: "Download CV",
    Adaemic_standind: "Academic Standing",
    Honor_Student_Candidate: "Honor Student Candidate",
    Consistent_top_tire_semeter_achievement: "Consistent top-tier semester achievement",
    Institution: "Institution &amp; Education",
    training: "Passerelles Numériques has implemented an innovative and comprehensive training program in each of its centers, focused on long-term employability.",
    duration: "January 2026 – Present",
    Hornor_recognition: "Honor Recognition",
    recognition_desc: "Recognized for academic performance and peer mentorship across semesters.",
    Core_Curriculum: "Core Curriculum",
    Core_Curriculum_Desc: "Data Structures, Algorithms, Database Systems Architecture.",
    Learning_Approach: "Learning Approach",
    Academic_Milestones_timeline: "Academic Milestones Timeline",
    Full_timeline: "Full_timeline",
    Beyond_the_Code: "Bayond_the_Code",
    Learning_Approach_Desc: "Learning by doing and peer-to-peer mentorship. Learning by doing and peer-to-peer mentorship.",
    Academic_Milestones_Desc: "Learning by doing and peer-to-peer mentorship. Learning by doing and peer-to-peer mentorship.",
    Couriosities_Hobby: "Curiosities & Hobbies",
    Academic_Milestones_timeline: "Academic Milestones Timeline",
    Full_timeline: "Full Timeline",
    milestone_2023_title: "Foundations & CS Basics",
    milestone_2023_desc: "Mastered algorithmic thinking, object-oriented concepts, and memory structures using C++ and Python. Solved 50+ algorithmic challenges and built basic data management tools.",
    milestone_2024_title: "Frontend & Web Architecture",
    milestone_2024_desc: "Transitioned internally into modern browser standards; asynchronous JavaScript, ES6+ tooling, and fluid CSS architecture, working fluently with semantic HTML principles.",
    milestone_2025_title: "Full Stack Projects & UI Systems",
    milestone_2025_desc: "Constructing multiple full-featured web apps utilizing ReactJS, TypeScript, and Tailwind CSS. Implementing component systems, client-side rendering, and custom hook logic.",
    in_progress: "In Progress",
    hobby_desc: "Exploring interests beyond coding, from digital art to community engagement, reflecting a well-rounded approach to personal and professional growth.",
    Active_Capabilities: "Active Capabilities",
    Skill_Competencies: "Skills &amp; Competencies",
    Skills_desc: "Technical stack, methodologies &amp; learing roadmap curated for high-impact front-end development.",
    Evolution_plan: "Evolution plan",
    see_my_project: "See My Projects →",
    Ready_skills: "Ready to see these skills in actual shipped code?",
    Ready_skills_desc: "Explore live deployments, repository commits, design implementations, and case study retrospectives.",
    Soft_Skills: "Soft Skills &amp; Professional Development",
    Collaborative_Value: "Collaborative Value",
    Core_Stacks: "Core Stacks",
    Core_Stacks_Desc: "Production-ready frameworks & build primitives",
    Proficiency_Index: "Proficiency Index",
    Proficiency_Index_Desc: "Aggregate practical domain benchmark",
    Academic_Honors: "Academic Honors",
    Academic_Honors_Desc: "Excellence citations & faculty merit awards",
    Clean_Accessible: "Clean & Accessible",
    Code_Architecture: "Code Architecture",
    Code_Architecture_Desc: "WCAG 2.1 AA compliant",
    Learning_Roadmap: "Learning Roadmap",
    roadmap_nextjs_title: "Next.js Framework",
    roadmap_nextjs_desc: "App Router, SSR strategies, and edge SSR deployments.",
    roadmap_typescript_title: "TypeScript (Strict Typing)",
    roadmap_typescript_desc: "Generics, interfaces, and compile-time contract enforcement.",
    roadmap_figma_title: "Figma Design Systems",
    roadmap_figma_desc: "Auto-layout tokens, atomic variants, and spec handoffs.",
    Soft_Skills: "Soft Skills",
    soft_communication_title: "Communication",
    soft_communication_desc: "Clear technical documentation and proactive stakeholder briefs.",
    soft_teamwork_title: "Teamwork & Pair Development",
    soft_teamwork_desc: "Collaborative code reviews and synchronous pairing sessions.",
    soft_problem_solving_title: "Problem Solving",
    soft_problem_solving_desc: "Methodical bug isolation, profiling, and root-cause fixes.",
    soft_time_management_title: "Time Management",
    soft_time_management_desc: "Structured agile iterations with reliable sprint deliverables.",
    Active_Capabilities: "Active Capabilities",
    Skill_Competencies: "Skills & Competencies",
    Skills_desc: "Technical stack, methodologies & learning roadmap curated for high-impact front-end development.",
    Avaibale_for_Internships: "Available for Internships 2027",
    Available_for_Internships: "Available for Hire — Internship 2027",
    Evolution_plan: "Evolution Plan",
    Collaborative_Value: "Collaborative Value",
    Soft_Skills: "Soft Skills & Professional Development",
    Ready_skills_desc: "Explore live deployments, repository commits, design implementations, and case study retrospectives.",
    Ready_skills: "Ready to see these skills in actual shipped code?",
    see_my_project: "See My Projects →",
    hobby_desc: "Exploring interests beyond coding, from digital art to community engagement, reflecting a well-rounded approach to personal and professional growth.",
    Couriosities_Hobby: "Curiosities & Hobbies",
    Ready_see_skills: "Ready to see these skills in actual shipped code?",
    Ready_see_skills_desc: "Explore live deployments, repository commits, design implementations, and case study retrospectives.",
    contact_title: "Get In Touch",
    contact_subtitle: "Have a question, project idea, or collaboration opportunity? Feel free to contact me.",
    full_name: "Full Name",
    email: "Email",
    subject_category: "Subject Category",
    message: "Message",
    full_name_placeholder: "Your full name",
    email_placeholder: "Your email address",
    message_placeholder: "Write your message here...",
    select_category: "Select a category",
    internship_inquiry: "Internship Inquiry",
    project_collaboration: "Project Collaboration",
    mentorship: "Mentorship",
    general_question: "General Question",
    send_message: "Send Message",
    form_success: "Message sent successfully! I'll reply within 24 hours.",
    form_sending: "Sending...",
    form_error: "Something went wrong. Please try again or email me directly.",
    message_counter: "0/500",
    Open_for_Opportunities: "Open for Opportunities 2027",
    contact_subtitle: "Have a question, project idea, or collaboration opportunity? Feel free to contact me.",
    copy_address: "Copy Address",
    copied: "Copied!",
    direct_routing: "Direct Voice / Telegram Line",
    base_of_operations: "Base of Operations",
    location: "Phnom Penh, Cambodia",
    Academic_program: "B.S. Computer Science",
    Availability: "Availability",
    B_S_Computer_Science: "B.S. Computer Science",
    Direct_Dispatch: "Direct Dispatch",
    Structure: "Structured transmission straight to inbox",
    Attention_needed: "Attention needed",
    Crrently_reviewing: "Currently reviewing Summer/Fall 2027",
    response_expectation: "Replies typically within 24 hours — Student friendly — Excited forcollaborations &amp; mentorship opportunities.",
  },
  km: {
    Crrently_reviewing: "កំពុងពិនិត្យមើលរដូវក្តៅ/រដូវស្លឹកឈើជ្រុះ ២០២៧",
    response_expectation: "ការឆ្លើយតបជាទូទៅក្នុងរយៈពេល ២៤ ម៉ោង - សិស្សមិត្តភាព - រំភើបចំពោះការសហការនិងឱកាសណែនាំ។",
    Attention_needed: "ត្រូវការយកចិត្តទុកដាក់",
    Direct_Dispatch: "ផ្ញើដោយផ្ទាល់",
    Structure: "ការផ្ទេរដោយមានរចនាសម្ព័ន្ធទៅប្រអប់សំបុត្រដោយផ្ទាល់",
    base_of_operations: "មូលដ្ឋានប្រតិបត្តិការ",
    location: "ភ្នំពេញ, កម្ពុជា",
    Academic_program: "បរិញ្ញាបត្រជាន់ខ្ពស់វិទ្យាសាស្ត្រកុំព្យូទ័រ",
    Availability: "ភាពអាចប្រើបាន",
    B_S_Computer_Science: "បរិញ្ញាបត្រជាន់ខ្ពស់វិទ្យាសាស្ត្រកុំព្យូទ័រ",
    direct_routing: "សំឡេងផ្ទាល់ / Telegram Line",
    copy_address: "ចម្លងអាសយដ្ឋាន",
    copied: "បានចម្លង!",
    Open_for_Opportunities: "អាចប្រើបានសម្រាប់ឱកាស ២០២៧",
    contact_subtitle: "មានសំណួរ គំនិតគម្រោង ឬឱកាសសហការណ៍? សូមទំនាក់ទំនងមកខ្ញុំ។",
    contact_title: "ទំនាក់ទំនងមកខ្ញុំ",
    Ready_see_skills: "តើអ្នកបានត្រៀមខ្លួនរួចហើយដើម្បីមើលជំនាញទាំងនេះនៅក្នុងកូដដែលបានដាក់ចេញ?",
    Ready_see_skills_desc: "សូមស្វែងរកការដាក់ចេញនៅក្នុងបណ្ដាញ ការប្តូរទិន្នន័យក្នុងឃ្លាំងកូដ ការអនុវត្តន៍រចនាសម្ព័ន្ធ និងការវិភាគករណី។",
    Evolution_plan: "ផែនការអភិវឌ្ឍន៍",
    Available_for_Internships: "អាចប្រើបានសម្រាប់ការអនុវត្តន៍ការងារ ២០២៧",
    Open_for_Internships: "អាចប្រើបានសម្រាប់ការអនុវត្តន៍ការងារ ២០២៧",
    Download_CV: "ទាញយកប្រវត្តិរូប",
    Adaemic_standind: "ស្ថានភាពសិក្សា",
    Honor_Student_Candidate: "និស្សិតដែលបានទទួលរង្វាន់",
    Consistent_top_tire_semeter_achievement: "ការសម្រេចបានល្អប្រសើរនៅក្នុងឆមាសជាច្រើន",
    Institution: "ស្ថាប័ន និងការអប់រំ",
    training: "Passerelles Numériques បានអនុវត្តកម្មវិធីបណ្តុះបណ្តាលថ្មី និងទូលំទូលាយនៅក្នុងមជ្ឈមណ្ឌលនីមួយៗ រួមផ្តោតលើការងារដែលមានសក្តានុពលរយៈពេលវែង។",
    duration: "មករា ២០២៦ – បច្ចុប្បន្ន",
    Hornor_recognition: "ការទទួលស្គាល់កិត្តិយស",
    recognition_desc: "ទទួលស្គាល់ការសម្តែងនូវការសិក្សា និងការបង្រៀនមិត្តភក្តិរបស់ខ្លួនក្នុងឆមាសជាច្រើន។",
    Core_Curriculum: "កម្មវិធីសិក្សាមូលដ្ឋាន",
    Core_Curriculum_Desc: "រចនាសម្ព័ន្ធទិន្នន័យ, អាកាសធាតុ, រចនាសម្ព័ន្ធផ្ទៃតាម.",
    Learning_Approach: "វិធីសាស្រ្តសិក្សា",
    Academic_Milestones_timeline: "ពេលវេលានៃសមិទ្ធិផលសិក្សា",
    Full_timeline: "ពេញលេញ",
    Beyond_the_Code: "លើសពីកូដ",
    Learning_Approach_Desc: "ការសិក្សាដោយផ្តោតលើការអនុវត្តន៍ និងការបង្រៀនគ្នា។ ការសិក្សាដោយផ្តោតលើការអនុវត្តន៍ និងការបង្រៀនគ្នា។",
    Academic_Milestones_Desc: "ការសិក្សាដោយផ្តោតលើការអនុវត្តន៍ និងការបង្រៀនគ្នា។ ការសិក្សាដោយផ្តោតលើការអនុវត្តន៍ និងការបង្រៀនគ្នា។",
    Learning_Approach_Desc: "ការសិក្សាដោយផ្តោតលើការអនុវត្តន៍ និងការបង្រៀនគ្នា។ ការសិក្សាដោយផ្តោតលើការអនុវត្តន៍ និងការបង្រៀនគ្នា។",
    Academic_Milestones_Desc: "ការសិក្សាដោយផ្តោតលើការអនុវត្តន៍ និងការបង្រៀនគ្នា។ ការសិក្សាដោយផ្តោតលើការអនុវត្តន៍ និងការបង្រៀនគ្នា។",
    Core_Curriculum: "កម្មវិធីសិក្សាមូលដ្ឋាន",
    Core_Curriculum_Desc: "រចនាសម្ព័ន្ធទិន្នន័យ, អាកាសធាតុ, រចនាសម្ព័ន្ធផ្ទៃតាម.",
    Avaibale_for_Internships: "អាចប្រើបានសម្រាប់ការអនុវត្តន៍ការងារ ២០២៧",
    Active_Capabilities: "សមត្ថភាពសកម្ម",
    Skill_Competencies: "ជំនាញ និងសមត្ថភាព",
    Skills_desc: "ស្តាក់បច្ចេកទេស វិធីសាស្រ្ត និងផែនទីការសិក្សាដែលបានរៀបចំសម្រាប់ការអភិវឌ្ឍន៍ផ្នែកមុខដែលមានឥទ្ធិពលខ្ពស់។",
    Avaibale_for_Internships: "អាចប្រើបានសម្រាប់ការអនុវត្តន៍ការងារ ២០២៧",
    Collaborative_Value: "តម្លៃសហការណ៍",
    Soft_Skills: "ជំនាញទន់ និងការអភិវឌ្ឍវិជ្ជាជីវៈ",
    Ready_skills_desc: "សូមស្វែងរកការដាក់ចេញនៅក្នុងបណ្ដាញ ការប្តូរទិន្នន័យក្នុងឃ្លាំងកូដ ការអនុវត្តន៍រចនាសម្ព័ន្ធ និងការវិភាគករណី។",
    Ready_skills: "តើអ្នកបានត្រៀមខ្លួនរួចហើយដើម្បីមើលជំនាញទាំងនេះនៅក្នុងកូដដែលបានដាក់ចេញហើយឬនៅ?",
    see_my_project: "មើលគម្រោងរបស់ខ្ញុំ →",
    hobby_desc: "ការស្វែងរកចំណាប់អារម្មណ៍លើសពីការសរសេរកូដ ចាប់ពីសិល្បៈឌីជីថលទៅការចូលរួមក្នុងសហគមន៍ បង្ហាញពីវិធីសាស្រ្តដែលមានទិសដៅល្អក្នុងការលូតលាស់ផ្ទាល់ខ្លួន និងវិជ្ជាជីវៈ។",
    Couriosities_Hobby: "ចំណាប់អារម្មណ៍ និងការចូលចិត្ត",
    Full_timeline: "ពេញលេញ",
    Academic_Milestones_timeline: "ពេលវេលានៃសមិទ្ធិផលសិក្សា",
    Learning_Approach: "វិធីសាស្រ្តសិក្សា",
    Beyond_the_Code: "លើសពីកូដ",
    Core_Curriculum: "កម្មវិធីសិក្សាមូលដ្ឋាន",
    Core_Curriculum_Desc: "រចនាសម្ព័ន្ធទិន្នន័យ, អាកាសធាតុ, រចនាសម្ព័ន្ធផ្ទៃតាម.",
    Hornor_recognition: "ការទទួលស្គាល់កិត្តិយស",
    recognition_desc: "ទទួលស្គាល់ការសម្តែងនូវការសិក្សា និងការបង្រៀនមិត្តភក្តិរបស់ខ្លួនក្នុងឆមាសជាច្រើន។",
    duration: "មករា ២០២៦ – បច្ចុប្បន្ន",
    training: "Passerelles Numériques បានអនុវត្តកម្មវិធីបណ្តុះបណ្តាលថ្មី និងទូលំទូលាយនៅក្នុងមជ្ឈមណ្ឌលនីមួយៗ រួមផ្តោតលើការងារដែលមានសក្តានុពលរយៈពេលវែង។",
    Institution: "ស្ថាប័ន និងការអប់រំ",
    Academic_standind: "ស្ថានភាពសិក្សា",
    Consistent_top_tire_semeter_achievement: "ការសម្រេចបានល្អប្រសើរនៅក្នុងឆមាសជាច្រើន",
    Honor_Student_Candidate: "និស្សិតដែលបានទទួលរង្វាន់",
    Download_CV: "ទាញយកប្រវត្តិរូប",
    Open_for_Internships: "បើកសម្រាប់ការអនុវត្តន៍ការងារ ២០២៧",
    B_S_Computer_Science: "បរិញ្ញាបត្រជាន់ខ្ពស់វិទ្យាសាស្ត្រកុំព្យូទ័រ",
    Availability: "ភាពអាចប្រើបាន",
    Academic_program: "កម្មវិធីសិក្សា",
    location: "ភ្នំពេញ, ប្រទេសកម្ពុជា",
    base_location: "ទីតាំងគោល",
    commitment: "ខ្ញុំជឿថា ពេលវេលាដ៏លេចធ្លោក្នុងវិស័យបច្ចេកវិទ្យា កើតឡើងនៅពេលដែលការអភិវឌ្ឍប្រព័ន្ធដែលមានប្រសិទ្ធភាព ជួបប្រទះជាមួយបទពិសោធន៍ប្រើប្រាស់ដែលងាយស្រួល និងទាក់ទាញ។ បច្ចុប្បន្ន ខ្ញុំកំពុងសិក្សា និងអភិវឌ្ឍជំនាញនៅទីក្រុងភ្នំពេញ ដោយផ្តោតលើការបំលែង Layout ដែលមានភាពស្មុគស្មាញ ទៅជាកម្មវិធីវេបសាយដែលដំណើរការរលូន ងាយស្រួលប្រើប្រាស់ និងអាចចូលប្រើបានសម្រាប់អ្នកប្រើប្រាស់គ្រប់រូប។",
    intern_2027: "កម្មសិក្សា ២០២៧",
    name: "អ៊ី សម្បត្តិ",
    Academic_Projects: "គម្រោងសិក្សា និងប្រវត្តិការអប់រំ",
    Verified_Projects: "និស្សិតវិស្វកម្មដែលបានផ្ទៀងផ្ទាត់ — ផ្នែកវិទ្យាសាស្ត្រកុំព្យូទ័រ",
    Student_Portfolio_Education: "ប្រវត្តិរូបនិស្សិត និងការអប់រំ",
    Academic_Milestones_timeline: "ពេលវេលានៃសមិទ្ធិផលសិក្សា",
    Full_timeline: "ពេលវេលាពេញលេញ",
    milestone_2023_title: "មូលដ្ឋានគ្រឹះ និងវិទ្យាសាស្ត្រកុំព្យូទ័រ",
    milestone_2023_desc: "បានសិក្សាអំពីការគិតបែប Algorithm, គោលគំនិត Object-Oriented និងរចនាសម្ព័ន្ធអង្គចងចាំ ដោយប្រើ C++ និង Python។ បានដោះស្រាយលំហាត់ Algorithm ជាង 50 និងបង្កើតឧបករណ៍គ្រប់គ្រងទិន្នន័យមូលដ្ឋាន។",
    milestone_2024_title: "Frontend និង Web Architecture",
    milestone_2024_desc: "បានផ្លាស់ប្តូរមកសិក្សាស្តង់ដារ Web ទំនើប JavaScript, ES6+ និង CSS Architecture ព្រមទាំងអនុវត្តគោលការណ៍ Semantic HTML។",
    milestone_2025_title: "Full Stack Projects និង UI Systems",
    milestone_2025_desc: "កំពុងបង្កើត Web App ជាច្រើនដោយប្រើ ReactJS, TypeScript និង Tailwind CSS ព្រមទាំងអនុវត្ត Component Systems, Client-side Rendering និង Custom Hooks។",
    in_progress: "កំពុងដំណើរការ",
    nav_home: "ទំព័រដើម",
    nav_about: "អំពីខ្ញុំ",
    nav_skills: "ជំនាញ",
    nav_projects: "គម្រោង",
    nav_contact: "ទំនាក់ទំនង",
    tagline: "អ្នកអភិវឌ្ឍន៍វេបសាយ · វិស្វករវិទ្យាសាស្ត្រកុំព្យូទ័រ",
    hero_title: "បង្កើតបទពិសោធន៍វេបសាយទំនើបដោយការសរសេរកូដ និងក្តីស្រឡាញ់។",
    hero_desc: "ខ្ញុំជានិស្សិតអភិវឌ្ឍន៍វេបសាយដែលស្រឡាញ់ក្នុងការរៀនបច្ចេកវិទ្យាថ្មីៗ បង្កើតវេបសាយដែលងាយស្រួលប្រើប្រាស់ និងអភិវឌ្ឍជំនាញបច្ចេកទេស។",
    btn_projects: "មើលគម្រោងរបស់ខ្ញុំ",
    btn_contact: "ទាក់ទងមកខ្ញុំ",
    get_in_touch: "ទំនាក់ទំនងមកខ្ញុំ",
    contact_desc: "សូមបំពេញទម្រង់ខាងក្រោមដើម្បីទាក់ទងមកខ្ញុំ។ ខ្ញុំនឹងឆ្លើយតបក្នុងរយៈពេល ២៤ ម៉ោង។",
    name_label: "ឈ្មោះ",
    email_label: "អ៊ីមែល",
    message_label: "សារ",
    submit_btn: "ផ្ញើសារ",
    char_count: "ចំនួនតួអក្សរ",
    form_success: "សាររបស់អ្នកត្រូវបានផ្ញើដោយជោគជ័យ! ខ្ញុំនឹងទាក់ទងមកអ្នកឆាប់ៗនេះ។",
    hero_role: "អ្នកអភិវឌ្ឍន៍វេបសាយ · វិស្វករវិទ្យាសាស្ត្រកុំព្យូទ័រ",
    build_modern: "បង្កើតបទពិសោធន៍វេបសាយទំនើប",
    hero_desc: "ខ្ញុំជានិស្សិតអភិវឌ្ឍន៍វេបសាយដែលមានចិត្តស្រឡាញ់ក្នុងការរៀនបច្ចេកវិទ្យាថ្មីៗ បង្កើតវេបសាយដែលងាយស្រួលប្រើប្រាស់ និងអភិវឌ្ឍជំនាញបច្ចេកទេស។ ផ្តោតលើការអភិវឌ្ឍន៍ឌីជីថលដោយផ្អែកលើអ្នកប្រើ និងស្ថាបត្យកម្មកម្មវិធីដែលមានរចនាសម្ព័ន្ធស្អាត។",
    view_projects: "មើលគម្រោងរបស់ខ្ញុំ",
    contact_me: "ទាក់ទងមកខ្ញុំ",
    technical_Proficiency: "ជំនាញបច្ចេកទេស",
    core_engineering_stack: "បច្ចេកវិទ្យាស្នូលសម្រាប់វិស្វកម្ម",
    selected_work: "ការងារដែលបានជ្រើសរើស",
    featured_projects: "គម្រោងវិស្វកម្មដែលបានលេចធ្លោ",
    explore_projects: "ស្វែងរកគម្រោងទាំងអស់",
    Open_for_Internships: "បើកសម្រាប់ការអនុវត្តន៍ការងារ​ ២០២៧",
    let_colaborate: "ចូលរួមសហការជាមួយខ្ញុំលើគម្រោងបន្ទាប់របស់អ្នក។",
    internship_desc: "ខ្ញុំកំពុងស្វែងរកតួនាទីជាអ្នកអភិវឌ្ឍន៍ផ្នែកមុខ (Frontend) ការអនុវត្តន៍ការងារវេបសាយ និងឱកាសរចនាផ្នែក UI/UX សម្រាប់ឆ្នាំ ២០២៧។ ប្រសិនបើអ្នកកំពុងស្វែងរកអ្នកអភិវឌ្ឍន៍ចំណាប់អារម្មណ៍ និងជំនាញដើម្បីចូលរួមជាមួយក្រុមរបស់អ្នក សូមទាក់ទងមកខ្ញុំដើម្បីពិភាក្សាអំពីការសហការមានសក្តានុពល។",

    // Project categories
    web_development: "ការអភិវឌ្ឍន៍វេបសាយ",
    ux_ui_design: "ការរចនា UX/UI",
    database_other: "Database និងផ្សេងៗ",

    // NSK Sport Store
    project_nsk_title: "ហាងលក់សម្ភារៈកីឡា NSK",
    project_nsk_badge: "ពាណិជ្ជកម្មអេឡិចត្រូនិក · កែប្រែ UI",
    project_nsk_desc: "ចំណុចប្រទាក់ពាណិជ្ជកម្មអេឡិចត្រូនិកសម្រាប់ហាងលក់សម្ភារៈកីឡាក្នុងស្រុក ដែលមានមុខងារតម្រងផលិតផល និងដំណើរការទូទាត់ដែលងាយស្រួល។",

    // Student Portfolio
    project_portfolio_title: "វេបសាយ Portfolio របស់និស្សិត",
    project_portfolio_badge: "គម្រោងលេចធ្លោ",
    project_portfolio_desc: "វេបសាយ Portfolio សម្រាប់អ្នកអភិវឌ្ឍន៍ ដែលមានផ្នែកជាច្រើន និងប្រព័ន្ធ Frontend ដែលត្រូវបានបង្កើតដោយប្រើ UI ដែលមានរចនាសម្ព័ន្ធជាម៉ូឌុល។",

    // TaskFlow
    project_taskflow_title: "TaskFlow Minimalist Manager",
    project_taskflow_badge: "ការរចនាផលិតផល",
    project_taskflow_desc: "កម្មវិធីគ្រប់គ្រងការងារផ្ទាល់ខ្លួនដែលមានការរចនាសាមញ្ញ សម្រាប់បញ្ចូលការងារបានរហ័ស និងរៀបចំការងារឡើងវិញដោយអូស និងទម្លាក់។",

    // Scholarship
    project_scholarship_title: "Scholarship Portal UI",
    project_scholarship_badge: "កែប្រែការរចនា UX/UI",
    project_scholarship_desc: "UI ដែលងាយស្រួលប្រើ និងអាចចូលប្រើបានសម្រាប់ប្រព័ន្ធដាក់ពាក្យសុំអាហារូបករណ៍សិក្សា។",

    // Event Finder
    project_event_title: "Compact Event Finder",
    project_event_badge: "ប្រព័ន្ធសាមញ្ញ",
    project_event_desc: "ឧបករណ៍ស្វែងរកព្រឹត្តិការណ៍ដែលមានទំហំតូច សម្រាប់ស្វែងរក និងចុះឈ្មោះព្រឹត្តិការណ៍បានរហ័សនៅលើទូរស័ព្ទ។",

    // Library
    project_library_title: "Library Resource Tracker",
    project_library_badge: "ប្រព័ន្ធ Database",
    project_library_desc: "ឧបករណ៍ Database សម្រាប់គ្រប់គ្រងសៀវភៅ ការខ្ចី ការប្រគល់ត្រឡប់ និងការរំលឹកសៀវភៅហួសកំណត់ដោយស្វ័យប្រវត្តិ។",

    view_case_study: "មើលករណីសិក្សា →",

    Core_Stacks: "ជំនាញបច្ចេកវិទ្យាសំខាន់ៗ",
    Core_Stacks_Desc: "Frameworks និងឧបករណ៍សម្រាប់បង្កើតគម្រោងដែលអាចប្រើប្រាស់បាន",

    Proficiency_Index: "កម្រិតជំនាញ",
    Proficiency_Index_Desc: "ការវាស់វែងកម្រិតជំនាញតាមការអនុវត្តជាក់ស្តែង",

    Academic_Honors: "កិត្តិយសផ្នែកសិក្សា",
    Academic_Honors_Desc: "សមិទ្ធិផលសិក្សា និងការទទួលស្គាល់ពីស្ថាប័នសិក្សា",

    Clean_Accessible: "កូដស្អាត និងងាយស្រួលប្រើ",
    Code_Architecture: "ស្ថាបត្យកម្មកូដ",
    Code_Architecture_Desc: "អនុលោមតាមស្តង់ដារ WCAG 2.1 AA",

    Learning_Roadmap: "ផែនការសិក្សាបន្ត",

    roadmap_nextjs_title: "Next.js Framework",
    roadmap_nextjs_desc: "សិក្សា App Router, SSR និងការដាក់ Deploy ទៅ Edge Server។",

    roadmap_typescript_title: "TypeScript (Strict Typing)",
    roadmap_typescript_desc: "សិក្សា Generics, Interfaces និងការគ្រប់គ្រង Type នៅពេល Compile។",

    roadmap_figma_title: "Figma Design Systems",
    roadmap_figma_desc: "សិក្សា Auto-layout, Design Tokens, Variants និងការបញ្ជូន Design Specification។",

    Soft_Skills: "ជំនាញទន់",

    soft_communication_title: "ការទំនាក់ទំនង",
    soft_communication_desc: "ការសរសេរឯកសារបច្ចេកទេសឱ្យច្បាស់ និងការទំនាក់ទំនងជាមួយក្រុមការងារ។",

    soft_teamwork_title: "ការងារជាក្រុម និង Pair Development",
    soft_teamwork_desc: "ការធ្វើ Code Review ជាក្រុម និងការសរសេរកូដជាមួយសមាជិកក្រុម។",

    soft_problem_solving_title: "ការដោះស្រាយបញ្ហា",
    soft_problem_solving_desc: "ស្វែងរកមូលហេតុនៃបញ្ហា ពិនិត្យ Bug និងដោះស្រាយបញ្ហាតាមជំហាន។",

    soft_time_management_title: "ការគ្រប់គ្រងពេលវេលា",
    soft_time_management_desc: "រៀបចំការងារតាមផែនការ និងបញ្ចប់ការងារតាមពេលវេលាកំណត់។",

    contact_title: "ទាក់ទងមកខ្ញុំ",
    contact_subtitle: "ប្រសិនបើអ្នកមានសំណួរ គំនិតគម្រោង ឬឱកាសសហការ អ្នកអាចទាក់ទងមកខ្ញុំបាន។",

    full_name: "ឈ្មោះពេញ",
    email: "អ៊ីមែល",
    subject_category: "ប្រភេទប្រធានបទ",
    message: "សារ",

    full_name_placeholder: "បញ្ចូលឈ្មោះពេញរបស់អ្នក",
    email_placeholder: "បញ្ចូលអ៊ីមែលរបស់អ្នក",
    message_placeholder: "សរសេរសាររបស់អ្នកនៅទីនេះ...",

    select_category: "ជ្រើសរើសប្រភេទ",
    internship_inquiry: "សំណួរអំពីកម្មសិក្សា",
    project_collaboration: "សហការគម្រោង",
    mentorship: "ការណែនាំ និងប្រឹក្សា",
    general_question: "សំណួរទូទៅ",

    send_message: "ផ្ញើសារ",
    form_success: "បានផ្ញើសារដោយជោគជ័យ! ខ្ញុំនឹងឆ្លើយតបក្នុងរយៈពេល 24 ម៉ោង។",
    form_sending: "កំពុងផ្ញើ...",
    form_error: "ផ្ញើសារមិនបានជោគជ័យ។ សូមព្យាយាមម្តងទៀត ឬផ្ញើអ៊ីមែលដោយផ្ទាល់។",

    message_counter: "0/500"


  },
};

// ២. បើក/បិទ Dropdown Menu
function toggleDropdown() {
  const menu = document.getElementById('lang-menu');
  menu.classList.toggle('hidden');
}

// ៣. មុខងារផ្លាស់ប្តូរអក្សរនៅលើអេក្រង់
function updatePageText(langCode) {
  const elements = document.querySelectorAll('[data-i18n]');

  elements.forEach((el) => {
    const key = el.getAttribute('data-i18n');

    if (translations[langCode]?.[key]) {
      el.innerText = translations[langCode][key];
    }
  });

  const placeholders = document.querySelectorAll('[data-i18n-placeholder]');

  placeholders.forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');

    if (translations[langCode]?.[key]) {
      el.placeholder = translations[langCode][key];
    }
  });
}

// ៤. មុខងារដំណើរការពេលចុចលើប៊ូតុងប្តូរភាសា
function changeLanguage(langCode, labelText, flagUrl) {

  currentLang = langCode;

  document.getElementById('current-flag').src = flagUrl;
  document.getElementById('current-lang').innerText = labelText;

  updatePageText(langCode);

  // Re-render JavaScript generated content
  renderHome();
  renderAbout();
  renderSkills();
  renderProjectsPage();

  document.getElementById('lang-menu').classList.add('hidden');

  localStorage.setItem(
    'selected_lang',
    JSON.stringify({
      langCode,
      labelText,
      flagUrl
    })
  );
}
// ៥. រក្សាភាសាដែលបានជ្រើសរើសពេល Reload ទំព័រ
document.addEventListener('DOMContentLoaded', () => {
  const saved = JSON.parse(localStorage.getItem('selected_lang'));
  if (saved) {
    changeLanguage(saved.langCode, saved.labelText, saved.flagUrl);
  }
});