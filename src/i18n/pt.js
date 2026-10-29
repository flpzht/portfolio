const pt = {
  meta: {
    htmlLang: 'pt-BR',
    title: 'Felipe Carvalho | Desenvolvedor Full Stack',
  },

  nav: {
    hero: 'Início',
    about: 'Sobre',
    skills: 'Habilidades',
    projects: 'Projetos',
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
