import portfolioImage from '@/assets/images/projects/portfolio-demo.gif';
import aroundImage from '@/assets/images/projects/around-img.webp';

const projects = [
  {
    id: "portfolio",
    image: portfolioImage,
    technologies: [
      "React",
      "Vite",
      "CSS Modules",
    ],
    github: "https://github.com/flpzht/portfolio",
    demo: "https://flpzht.github.io/portfolio/",
  },
  {
    id: "around",
    image: aroundImage,
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
