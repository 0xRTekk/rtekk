import React, { useState, useLayoutEffect, useRef } from "react";
import styles from "./style.module.css";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projects = [
  {
    title: "Campa Stock",
    description:
      "Worked with Socodicor to create a stock management system for agricultures materials and machines.",
    categories: ["Fullstack"],
    technologies: ["Next.js", "Express.js", "API", "MySQL", "Docker"],
    client: "Socodicor",
    year: "2024",
    urls: {
      github: null,
      live: null,
    },
    covers: [
      {
        name: "Campa Stock landing page",
        url: "/images/campa_stock.jpeg",
      },
    ],
  },
  {
    title: "Knight on Base",
    description:
      "Led the creation of a text based role playing game. The game is built on the Base blockchain and uses generative AI, as a game master, to drive the gamers through their own unique story.",
    categories: ["Fullstack", "Web3", "AI"],
    technologies: ["Next.js", "Generative AI", "Solidity", "NFT"],
    client: "Knight on Base",
    year: "2024",
    urls: {
      github: null,
      live: null,
    },
    covers: [
      {
        name: "Knight on base landing page",
        url: "#",
      },
    ],
  },
];

// export default function Index() {

//     const [selectedProject, setSelectedProject] = useState(0);
//     const container = useRef(null);
//     const imageContainer = useRef(null);

//     useLayoutEffect( () => {
//         gsap.registerPlugin(ScrollTrigger);
//         ScrollTrigger.create({
//             trigger: imageContainer.current,
//             pin: true,
//             start: "top-=100px",
//             end: document.body.offsetHeight - window.innerHeight - 50,
//         })
//     }, [])

//     return (
//         <div ref={container} className={styles.projects}>
//             <div className={styles.projectDescription}>
//                 <div ref={imageContainer} className={styles.imageContainer}>
//                     <Image
//                         src={`/images/${projects[selectedProject].src}`}
//                         fill={true}
//                         alt="project image"
//                         priority={true}
//                     />
//                 </div>
//                 <div className={styles.column}>
//                     <p>The flora is characterized by the presence of high elevation wetland, as well as yellow straw, broom sedge, tola de agua and tola amaia.</p>
//                 </div>
//                 <div className={styles.column}>
//                     <p>Some, like the southern viscacha, vicuña and Darwins rhea, are classified as endangered species. Others, such as Andean goose, horned coot, Andean gull, puna tinamou and the three flamingo species inhabiting in Chile (Andean flamingo, Chilean flamingo, and Jamess flamingo) are considered vulnerable.</p>
//                 </div>
//             </div>

//             <div className={styles.projectList}>
//                 {
//                     projects.map( (project, index) => {
//                         return <div key={index} onMouseOver={() => {setSelectedProject(index)}} className={styles.projectEl}>
//                             <h2>{project.title}</h2>
//                         </div>
//                     })
//                 }
//             </div>
//         </div>
//     )
// }

export default function Index() {
  return (
    <div className={styles.projects}>
      <div className={styles.header}>
        <h2>Projects</h2>
        <h3>Selected works.</h3>
        <p>
          I create applications and tools to be profitable and help people with my skills. <br/>
          Here is a list of some of the projects I have worked on.
        </p>
      </div>
      <div className={styles.projectList}>
        <div className={styles.projectListHeading}>
          <p>Title</p>
          <p>Categories</p>
          <p>Client</p>
          <p>Year</p>
        </div>
        {projects.map((project, index) => {
          return (
            <div key={index} className={styles.projectItem}>
              <p>{project.title}</p>
              <p>{project.categories.join(", ")}</p>
              <p>{project.client}</p>
              <p>{project.year}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
