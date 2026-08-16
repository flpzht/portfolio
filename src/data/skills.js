import frontendIcon from '@/assets/icons/frontendIcon.svg';
import backendIcon from '@/assets/icons/backendIcon.svg';
import databaseIcon from '@/assets/icons/databaseIcon.svg';
import devtoolsIcon from '@/assets/icons/devtoolsIcon.svg';


const skills = [
  {
    id: "frontend",

    image: frontendIcon,

    title: "Front-End",

    description:
      "Tecnologias para desenvolvimento de interfaces.",

    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Vite",
      "Tailwind CSS",
    ],
  },
  {
    id: "backend",

    image: backendIcon,

    title: "Back-End",

    description:
      "Construção de APIs e serviços.",

    items: [
      "Node.js",
      "Express",
      "JWT",
      "REST API",
    ],
  },
  {
    id: "database",

    image: databaseIcon,

    title: "Database",

    description:
      "Databases e serviços.",

    items: [
      "MongoDB",
      "MySQL",
      "SQL",
    ],
  },
  {
    id: "tools",

    image: devtoolsIcon,
    title: "Tools",
    description:
      "Ferramentas de programação.",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Figma",
      "Postman",
    ],
  },
];

export { skills };
