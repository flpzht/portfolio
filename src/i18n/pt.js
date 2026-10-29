const pt = {
  meta: {
    htmlLang: 'pt-BR',
    title: 'Felipe Carvalho | Desenvolvedor Full Stack',
  },

  nav: {
    hero: 'Início',
    about: 'Sobre',
    experience: 'Experiência',
    skills: 'Habilidades',
    projects: 'Projetos',
    certificates: 'Formação',
    contact: 'Contato',
    logoLabel: 'Ir para o topo da página',
  },

  hero: {
    greeting: 'Olá, sou',
    role: 'Full Stack Developer',
    description:
      'Desenvolvedor apaixonado por criar interfaces modernas, acessíveis e performáticas utilizando React, JavaScript e tecnologias web.',
    projectsButton: 'Ver projetos',
    contactButton: 'Entrar em contato',
    resumeButton: 'Baixar currículo',
    imageAlt: 'Felipe Carvalho, desenvolvedor Full Stack',
  },

  about: {
    title: 'Sobre mim',
    p1: 'Economista de formação, construí minha trajetória profissional analisando dados, otimizando processos em FP&A/Controladoria e gerando inteligência de negócios (BI). Essa vivência me deu uma base sólida para resolver problemas complexos e entender o impacto real da tecnologia no negócio.',
    p2: 'Hoje, canalizo essa capacidade analítica para a engenharia de software, construindo soluções completas no ecossistema Web.',
    listIntro: 'O que estou construindo e estudando:',
    items: [
      { label: 'Front-end:', text: 'Interfaces modernas, responsivas e acessíveis com React, JavaScript (ES6+) e CSS3.' },
      { label: 'Back-end:', text: 'APIs e serviços com Node.js e arquitetura limpa.' },
      { label: 'Boas práticas:', text: 'Clean Code, versionamento estruturado com Git e código escalável.' },
    ],
    p3: 'Busco oportunidades como Desenvolvedor para somar visão estratégica de negócio com entrega técnica de valor.',
    badgeLeft: 'Economista',
    badgeRight: 'Full Stack Dev',
    altDev: 'Desenvolvedor Full Stack',
    sliderLabel: 'Comparar economista e desenvolvedor',
    altFin: 'Economista FP&A',
  },

  experience: {
    title: 'Experiência',
    items: [
      {
        role: 'Analista de Controladoria Pleno',
        company: 'Fundação Orquestra Sinfônica Brasileira',
        meta: 'Rio de Janeiro, RJ (híbrido)',
        period: 'nov/2025 – mar/2026',
        bullets: [
          'Criei a planilha orçamentária usada por todos os setores para acompanhar o próprio orçamento e o gasto por projeto, permitindo realocar saldo de projetos com sobra para projetos com maior necessidade.',
          'Estruturei o controle de gastos e defini datas fixas para pagamentos específicos, dando visibilidade do gasto real por despesa ao longo do projeto bianual.',
        ],
      },
      {
        role: 'Requalificação para desenvolvimento web',
        company: 'DIO',
        meta: 'Online',
        period: 'abr/2025 – nov/2025',
        description: 'Estudo de Python, SQL, Power BI, HTML, CSS e JavaScript.',
      },
      {
        role: 'Analista de Controladoria Freelancer',
        company: 'Autônomo',
        meta: 'Rio de Janeiro, RJ (remoto)',
        period: 'jan/2024 – abr/2025',
        bullets: [
          'Criei do zero planilhas orçamentárias para controle interno e cálculo de rentabilidade por projeto, cruzando o trabalho de cada setor e funcionário, o custo para a empresa e o valor cobrado.',
          'Estabeleci a base de cálculo para definir o valor correto a cobrar em serviços futuros.',
        ],
      },
      {
        role: 'Supervisor Financeiro (2019–2023)',
        company: 'Reserve Systems',
        meta: 'Rio de Janeiro, RJ (híbrido)',
        period: 'mai/2017 – dez/2023',
        earlier: 'Antes: Analista Financeiro (2018–2019) e Assistente Financeiro (2017–2018)',
        bullets: [
          'Reduzi o tempo de faturamento dos 5 produtos de 10 para 2 dias úteis, com Excel e VBA.',
          'Automatizei faturamento, fluxo de caixa, relatório de notas fiscais, relatório mensal de entradas e saídas e relatório semanal do financeiro (ex.: inadimplência).',
          'Supervisionei 2 estagiários do financeiro.',
        ],
      },
    ],
  },

  certificates: {
    title: 'Formação e certificados',
    items: [
      {
        type: 'Formação',
        title: 'Programa de Desenvolvimento Web (Full Stack)',
        institution: 'TripleTen',
        details: 'Online · jan/2026 – out/2026 · 860 h',
        description: 'Formação intensiva de 10 meses em desenvolvimento de aplicações web, com HTML5, CSS3, JavaScript, React, Node.js, Express.js, MongoDB, APIs REST, Git/GitHub e Webpack. Inclui 19 projetos com interfaces responsivas, integração com APIs, autenticação de usuários e aplicações web completas.',
      },
      {
        type: 'Graduação',
        title: 'Bacharelado em Economia',
        institution: 'UERJ',
        details: 'Rio de Janeiro, RJ · Conclusão em 2018',
      },
      {
        type: 'Certificação',
        title: 'Análise de Dados com Python, Power BI e SQL',
        institution: 'DIO',
        details: '2025 · 68 h',
      },
    ],
  },

  skills: {
    title: 'Habilidades',
    groups: {
      frontend: { title: 'Front-End', description: 'Tecnologias para desenvolvimento de interfaces.' },
      backend: { title: 'Back-End', description: 'Construção de APIs e serviços.' },
      database: { title: 'Banco de Dados', description: 'Bancos de dados e serviços.' },
      tools: { title: 'Ferramentas', description: 'Ferramentas de programação.' },
    },
  },

  projects: {
    title: 'Projetos',
    github: 'GitHub',
    demo: 'Ver demo',
    items: {
      portfolio: {
        title: 'Portfolio',
        description: 'Meu portfólio pessoal desenvolvido com React e Vite.',
      },
      around: {
        title: 'Around The U.S.',
        description: 'Aplicação Full Stack para compartilhamento de imagens.',
      },
    },
  },

  contact: {
    title: 'Contato',
    subtitle: 'Gostou do meu trabalho? Vamos conversar.',
    items: {
      github: { title: 'GitHub', description: 'Confira meus projetos e contribuições.', button: 'Ver GitHub' },
      linkedin: { title: 'LinkedIn', description: 'Conheça minha trajetória profissional.', button: 'Ver LinkedIn' },
      email: { title: 'Email', description: 'Entre em contato diretamente por e-mail.', button: 'Enviar e-mail' },
      whatsapp: { title: 'WhatsApp', description: 'Vamos conversar sobre oportunidades.', button: 'Enviar mensagem' },
    },
  },

  footer: {
    description:
      'Desenvolvedor Full Stack focado em criar aplicações modernas, acessíveis e de alta qualidade.',
    socialLabel: 'Redes sociais',
    rights: 'Todos os direitos reservados.',
  },

  theme: {
    toLight: 'Ativar tema claro',
    toDark: 'Ativar tema escuro',
  },

  language: {
    switchTo: 'Mudar idioma para inglês',
  },
};

export default pt;
