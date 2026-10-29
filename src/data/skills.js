import frontendIcon from '@/assets/icons/frontendIcon.svg';
import backendIcon from '@/assets/icons/backendIcon.svg';
import databaseIcon from '@/assets/icons/databaseIcon.svg';
import devtoolsIcon from '@/assets/icons/devtoolsIcon.svg';

const skills = [
  {
    id: "frontend",
    image: frontendIcon,
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Vite",
    ],
  },
  {
    id: "backend",
    image: backendIcon,
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
    items: [
      "MongoDB",
      "MySQL",
      "SQL",
    ],
  },
  {
    id: "tools",
    image: devtoolsIcon,
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
