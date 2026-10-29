const en = {
  meta: {
    htmlLang: 'en',
    title: 'Felipe Carvalho | Full Stack Developer',
  },

  nav: {
    hero: 'Home',
    about: 'About',
    experience: 'Experience',
    skills: 'Skills',
    projects: 'Projects',
    certificates: 'Education',
    contact: 'Contact',
    logoLabel: 'Go to the top of the page',
  },

  hero: {
    greeting: "Hi, I'm",
    role: 'Full Stack Developer',
    description:
      'Developer passionate about building modern, accessible and high-performance interfaces with React, JavaScript and web technologies.',
    projectsButton: 'View projects',
    contactButton: 'Get in touch',
    resumeButton: 'Download résumé',
    imageAlt: 'Felipe Carvalho, Full Stack developer',
  },

  about: {
    title: 'About me',
    p1: 'An economist by training, I built my career analyzing data, optimizing processes in FP&A/Controllership and delivering business intelligence (BI). That experience gave me a solid foundation to solve complex problems and understand the real impact of technology on business.',
    p2: 'Today, I channel that analytical ability into software engineering, building complete solutions in the Web ecosystem.',
    listIntro: "What I'm building and studying:",
    items: [
      { label: 'Front-end:', text: 'Modern, responsive and accessible interfaces with React, JavaScript (ES6+) and CSS3.' },
      { label: 'Back-end:', text: 'APIs and services with Node.js and clean architecture.' },
      { label: 'Best practices:', text: 'Clean Code, structured Git versioning and scalable code.' },
    ],
    p3: "I'm looking for opportunities as a Developer to combine strategic business vision with valuable technical delivery.",
    badgeLeft: 'Economist',
    badgeRight: 'Full Stack Dev',
    altDev: 'Full Stack Developer',
    sliderLabel: 'Compare economist and developer',
    altFin: 'FP&A Economist',
  },

  experience: {
    title: 'Experience',
    items: [
      {
        role: 'Senior Controllership Analyst',
        company: 'Fundação Orquestra Sinfônica Brasileira',
        meta: 'Rio de Janeiro, Brazil (hybrid)',
        period: 'Nov 2025 – Mar 2026',
        bullets: [
          'Built the budget spreadsheet used by all departments to track their own budget and spending per project, allowing leftover funds from one project to be reallocated to projects with greater needs.',
          'Structured expense control and set fixed dates for specific payments, giving visibility into actual spending per expense throughout the two-year project cycle.',
        ],
      },
      {
        role: 'Career retraining in web development',
        company: 'DIO',
        meta: 'Online',
        period: 'Apr 2025 – Nov 2025',
        description: 'Studied Python, SQL, Power BI, HTML, CSS and JavaScript.',
      },
      {
        role: 'Freelance Controllership Analyst',
        company: 'Self-employed',
        meta: 'Rio de Janeiro, Brazil (remote)',
        period: 'Jan 2024 – Apr 2025',
        bullets: [
          'Built from scratch budget spreadsheets for internal control and per-project profitability calculation, combining the work of each department and employee, the cost to the company and the amount billed.',
          'Established the calculation base for setting the right price for future services.',
        ],
      },
      {
        role: 'Financial Supervisor (2019–2023)',
        company: 'Reserve Systems',
        meta: 'Rio de Janeiro, Brazil (hybrid)',
        period: 'May 2017 – Dec 2023',
        earlier: 'Earlier: Financial Analyst (2018–2019) and Financial Assistant (2017–2018)',
        bullets: [
          "Cut billing time for the company's 5 products from 10 to 2 business days using Excel and VBA.",
          'Automated billing, cash flow, invoice reports, the monthly inflow/outflow report and the weekly finance report (e.g. delinquency).',
          'Supervised 2 finance interns.',
        ],
      },
    ],
  },

  certificates: {
    title: 'Education and certificates',
    items: [
      {
        type: 'Education',
        title: 'Web Development Program (Full Stack)',
        institution: 'TripleTen',
        details: 'Online · Jan 2026 – Oct 2026 · 860 h',
        description: 'Intensive 10-month program in web application development, covering HTML5, CSS3, JavaScript, React, Node.js, Express.js, MongoDB, REST APIs, Git/GitHub and Webpack. Includes 19 projects with responsive interfaces, API integration, user authentication and complete web applications.',
      },
      {
        type: 'Degree',
        title: 'B.A. in Economics',
        institution: 'UERJ',
        details: 'Rio de Janeiro, Brazil · Graduated 2018',
      },
      {
        type: 'Certification',
        title: 'Data Analysis with Python, Power BI and SQL',
        institution: 'DIO',
        details: '2025 · 68 h',
      },
    ],
  },

  skills: {
    title: 'Skills',
    groups: {
      frontend: { title: 'Front-End', description: 'Technologies for building interfaces.' },
      backend: { title: 'Back-End', description: 'Building APIs and services.' },
      database: { title: 'Database', description: 'Databases and services.' },
      tools: { title: 'Tools', description: 'Programming tools.' },
    },
  },

  projects: {
    title: 'Projects',
    github: 'GitHub',
    demo: 'View demo',
    items: {
      portfolio: {
        title: 'Portfolio',
        description: 'My personal portfolio built with React and Vite.',
      },
      around: {
        title: 'Around The U.S.',
        description: 'Full Stack application for sharing images.',
      },
    },
  },

  contact: {
    title: 'Contact',
    subtitle: 'Liked my work? Let’s talk.',
    items: {
      github: { title: 'GitHub', description: 'Check out my projects and contributions.', button: 'View GitHub' },
      linkedin: { title: 'LinkedIn', description: 'Get to know my professional background.', button: 'View LinkedIn' },
      email: { title: 'Email', description: 'Reach out to me directly by email.', button: 'Send email' },
      whatsapp: { title: 'WhatsApp', description: "Let's talk about opportunities.", button: 'Send message' },
    },
  },

  footer: {
    description:
      'Full Stack developer focused on building modern, accessible and high-quality applications.',
    socialLabel: 'Social links',
    rights: 'All rights reserved.',
  },

  theme: {
    toLight: 'Switch to light theme',
    toDark: 'Switch to dark theme',
  },

  language: {
    switchTo: 'Switch language to Portuguese',
  },
};

export default en;
