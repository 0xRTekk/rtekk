import React, { useState, useRef } from "react";
// import { Tilt } from "react-tilt";
import { motion, useInView } from "framer-motion";

import { styles } from "../styles";
import { skills } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant, staggerParent, staggerChild } from "../utils/motion";


const SkillPanel = ({ category, icon, gradient, technologies, carouselIndex, setCarouselIndex }) => {
  return (
    <div className='skill-panel w-full' >
      <motion.div
        variants={fadeIn("right", "spring", 0.5, 0.75)}
        className={`w-full bg-gradient-to-tr ${gradient} p-[3px] rounded-md shadow-card`}
      >
        <div className='bg-tertiary rounded-md py-8 px-10'>
          <h3 className='text-white text-[26px] mb-10 font-bold'>{category}</h3>
          <div className='tech-wrapper flex w-full'>
            <motion.div
              className='tech-list w-3/5'
              initial="hidden"
              animate="visible"
              variants={staggerParent}
            >
              {technologies.map(tech => (
                <motion.div
                  key={tech.name}
                  className='tech'
                  variants={staggerChild}
                >
                  {tech.name}
                  <div className="w-full mb-5 bg-neutral-200 dark:bg-neutral-600 rounded-md">
                    <div
                      className={`bg-gradient-to-r ${gradient} p-1.5 text-center text-xs font-medium leading-none text-primary-100 rounded-md`}
                      style={{ width: tech.level }}>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <div className='tech-icon w-2/5 flex justify-center items-center'>
              <img
                  src={icon}
                  alt={icon}
                  className='w-16 h-16 object-contain'
                />
            </div>
          </div>

          <div className='carousel-actions flex justify-center items-center space-x-4 mt-8'>
            {/* Left arrow icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke={`${carouselIndex <= 0 ? 'grey' : 'currentColor'}`}
              className={`h-10 w-10 ${carouselIndex <= 0 ? '' : 'cursor-pointer'}`}
              onClick={() => {
                if (carouselIndex > 0) {
                  setCarouselIndex(carouselIndex-1);
                }
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            
            <p>{carouselIndex+1}/4</p>

            {/* Right arrow icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke={`${carouselIndex >= 3 ? 'grey' : 'currentColor'}`}
              className={`h-10 w-10 ${carouselIndex >= 3 ? '' : 'cursor-pointer'}`}
              onClick={() => {
                if (carouselIndex < 3) {
                  setCarouselIndex(carouselIndex+1);
                }
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Skills = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const skill = skills[carouselIndex];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Technical stack</p>
        <h2 className={styles.sectionHeadText}>Skills</h2>
      </motion.div>
      
      <div className='mt-20 flex flex-wrap gap-10'>
       <SkillPanel carouselIndex={carouselIndex} setCarouselIndex={setCarouselIndex} {...skill} />
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "skills");
