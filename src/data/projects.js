import portfolioImage from '@/assets/images/projects/portfolio-img.png';
import aroundImage from '@/assets/images/projects/around-img.png';

const projects = [

  {
    id: "portfolio",
    image: portfolioImage,
    title: "Portfolio",
    description:
      "Meu portfólio pessoal desenvolvido com React e Vite.",
    technologies: [
      "React",
      "Vite",
      "CSS Modules",
    ],
    github: "https://github.com/flpzht/portfolio",
    demo: "#",
  },

  {
    id: "around",
    image: aroundImage,
    title: "Around The U.S.",
    description:
      "Aplicação Full Stack para compartilhamento de imagens.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    github: "https://github.com/flpzht/web_project_api_full",
    demo: "https://flp-around-us.verymad.net/signin",
  },
];

export { projects };
