import React, { useRef } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      {/* Card */}
      <div
        className='relative bg-tertiary rounded-md sm:w-[470px] w-full h-[85%]'
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
              <h3 className='text-white font-bold text-3xl '>{name}</h3>
              <p className='mt-6 text-secondary text-[14px]'>{description}</p>
            </div>
            
            <div className='mt-8 flex flex-wrap gap-2 justify-center'>
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <img
                  src={github}
                  alt='source code'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
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


// Custom class name for the Project Component
// 
const customClassName = `${styles.paddingX} max-w-8xl mx-auto relative z-0 pt-[76px]`;

const Projects = () => {
  const projectsListRef = useRef(null);

  return (
    <div>
      {/* Heading section */}
      <motion.div variants={textVariant()} className={`${styles.paddingX} max-w-7xl mx-auto`}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>

      {/* Carousel Arrows */}
      <div className='absolute w-full min-h-screen'>
        {/* Left Arrow */}
        <div
          className='absolute top-0 left-[-5%] z-20 w-[7%] h-[92%] rounded-r-md flex bg-gray-950 opacity-20 hover:opacity-50 hover:scale-105 transition ease-in-out  cursor-pointer'
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

        {/* Right Arrow */}
        <div
          className='absolute top-0 right-[2%] z-20 w-[7%] h-[92%] rounded-l-md flex bg-gray-950 opacity-20 hover:opacity-50 hover:scale-105 transition ease-in-out cursor-pointer'
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

      {/* Projects list */}
      <div className='flex gap-8 mt-12 min-h-screen overflow-y-hidden overflow-scroll' ref={projectsListRef}>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Projects, "projects", customClassName);
