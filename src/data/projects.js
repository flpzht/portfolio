import portfolioImage from '@/assets/images/projects/portfolio-demo.gif';
import pokedexImage from '@/assets/images/projects/pokedex-demo.webp';
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
    repos: [{ type: "github", href: "https://github.com/flpzht/portfolio" }],
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
    repos: [{ type: "github", href: "https://github.com/flpzht/web_project_api_full" }],
    demo: "https://flp-around-us.verymad.net/signin",
  },
  {
    id: "pokedex",
    image: pokedexImage,
    technologies: [
      "JavaScript",
      "HTML5",
      "CSS3",
      "PokéAPI",
    ],
    repos: [{ type: "github", href: "https://github.com/flpzht/card-flip-overlay" }],
    demo: "https://flpzht.github.io/card-flip-overlay/",
  },
  {
    id: "news",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
    ],
    repos: [
      { type: "frontend", href: "https://github.com/flpzht/news-explorer-frontend" },
      { type: "backend", href: "https://github.com/flpzht/news-explorer-backend" },
    ],
  },
];

export { projects };
