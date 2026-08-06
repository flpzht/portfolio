import Card from '@/components/Card/Card';

import styles from './Projects.module.css';

import portfolioImage from '@/assets/images/portfolioImg.png';
import aroundImage from '@/assets/images/aroundImg.png';

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



export default function Projects() {


  return (

    <section
      id="projects"
      className={styles.projects}
    >


      <div className={styles.container}>


        <h2 className={styles.title}>
          Projects
        </h2>


        <div className={styles.grid}>


          {projects.map((project) => (

            <Card

              key={project.id}

              image={project.image}

              title={project.title}

              description={project.description}

            >


              <ul className={styles.list}>


                {project.technologies.map((technology) => (

                  <li
                    key={technology}
                    className={styles.item}
                  >

                    {technology}

                  </li>

                ))}


              </ul>



              <div className={styles.links}>


                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >

                  GitHub

                </a>



                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                >

                  Demo

                </a>


              </div>


            </Card>


          ))}


        </div>


      </div>


    </section>

  );


}
