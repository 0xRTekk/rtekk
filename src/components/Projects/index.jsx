import React from "react";
import styles from "./style.module.css";
import projectsList from "./data";

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
        {projectsList.map((project, index) => {
          return (
            <div key={`project-${index}`} className={styles.projectItem}>
              <p>{project.title}</p>
              <p>{project.categories.join(", ")}</p>
              <p>{project.client}</p>
              <p>{project.year}</p>
              <div className={styles.projectItemBackground}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
