import React, { useRef } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, website } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  state,
  description,
  tags,
  image,
  source_code_link,
  project_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className='w-[32%]'>
      {/* Card */}
      <div
        className='relative bg-tertiary rounded-md h-[85%] w-full shadow-card'
      >

        {/* Card content */}
        <div className='relative flex flex-col justify-between w-full h-full py-3 z-10'>
          {/* Card marquee */}
          <div className='flex flex-row bg-gradient-to-tr from-tertiary to-indigo-950 '>
            <marquee behavior="alternate" scrollamount="3" className='overflow-hidden'>
              {tags.map((tag) => (
                <div key={`${name}-${tag.name}`} className='inline-block'>
                  <p className='text-white font-black md:text-[50px] sm:text-[40px] xs:text-[30px] text-[30px] uppercase'>
                    <span className='mx-6'>✨</span>{tag.name}
                  </p>
                </div>
              ))}
            </marquee>
          </div>


          {/* Card description & buttons */}
          <div>
            <div className='px-5'>
              <div className='flex flex-row justify-between items-baseline'>
                <h3 className='text-white font-bold text-3xl'>{name}</h3>
                <p className={`${state.color} rounded-full p-2 font-bold text-sm`}>{state.label}</p>
              </div>
              <p className='mt-6 text-secondary text-[14px]'>{description}</p>
            </div>
            
            <div className='mt-8 flex flex-wrap gap-12 justify-center'>
              <a href={source_code_link}>
                <img
                  src={github}
                  alt='source code'
                  target='_blank'
                  className='w-10 h-10 hover:scale-110 transition ease-in-out cursor-pointer'
                />
              </a>
              {project_link && (
                <a href={project_link}>
                  <img
                    src={website}
                    alt='Web site'
                    target='_blank'
                    className='w-10 h-10 hover:scale-110 transition ease-in-out cursor-pointer'
                  />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Card background */}
        <div className='absolute w-full h-2/3 top-0 left-0'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-t-md'
          />
        </div>
      </div>
    </motion.div>
  );
};


const Projects = () => {
  const projectsListRef = useRef(null);

  return (
    <div className='h-full'>
      {/* Heading section */}
      <motion.div variants={textVariant()} className={`${styles.paddingX} max-w-7xl mx-auto`}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>

      {/* Carousel Arrows */}
      {/*
        <div className='absolute w-full min-h-screen'>
        <div
          className='absolute top-0 left-0 z-20 w-[7%] h-[92%] rounded-r-md flex bg-gray-950 opacity-20 hover:opacity-50 hover:scale-105 transition ease-in-out cursor-pointer'
          onClick={() => {
            projectsListRef.current.scrollBy({
              top: 0,
              left: -500,
              behavior: "smooth",
            });
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='opacity-100'>
            <path d="M14.383 7.076a1 1 0 0 0-1.09.217l-4 4a1 1 0 0 0 0 1.414l4 4A1 1 0 0 0 15 16V8a1 1 0 0 0-.617-.924zM13 13.586 11.414 12 13 10.414z" style={{ fill: "#ffffff" }} data-name="Left"/>
          </svg>
        </div>

        <div
          className='absolute top-0 right-0 z-20 w-[7%] h-[92%] rounded-l-md flex bg-gray-950 opacity-20 hover:opacity-50 hover:scale-105 transition ease-in-out cursor-pointer'
          onClick={() => {
            projectsListRef.current.scrollBy({
              top: 0,
              left: 500,
              behavior: "smooth",
            });
          }}  
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="m14.707 11.293-4-4A1 1 0 0 0 9 8v8a1 1 0 0 0 1.707.707l4-4a1 1 0 0 0 0-1.414zM11 13.586v-3.172L12.586 12z" style={{ fill: "#ffffff" }} data-name="Right"/>
          </svg>
        </div>
      </div>
      */}
      

      {/* Projects list */}
      <div className='px-6 flex justify-between mt-12 h-full overflow-y-hidden overflow-scroll' ref={projectsListRef}>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Projects, "projects", "max-w-full sm:px-2");
