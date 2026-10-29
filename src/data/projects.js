import pokedexImage from '@/assets/images/projects/pokedex-demo.webp';

import portfolioMp4 from '@/assets/images/projects/portfolio-demo.mp4';
import portfolioWebm from '@/assets/images/projects/portfolio-demo.webm';
import portfolioPoster from '@/assets/images/projects/portfolio-poster.webp';

import aroundMp4 from '@/assets/images/projects/around-demo.mp4';
import aroundWebm from '@/assets/images/projects/around-demo.webm';
import aroundPoster from '@/assets/images/projects/around-poster.webp';

import newsMp4 from '@/assets/images/projects/news-demo.mp4';
import newsWebm from '@/assets/images/projects/news-demo.webm';
import newsPoster from '@/assets/images/projects/news-poster.webp';

const projects = [
  {
    id: "portfolio",
    media: { mp4: portfolioMp4, webm: portfolioWebm, poster: portfolioPoster },
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
    media: { mp4: aroundMp4, webm: aroundWebm, poster: aroundPoster },
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
    media: { image: pokedexImage },
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
    media: { mp4: newsMp4, webm: newsWebm, poster: newsPoster },
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
