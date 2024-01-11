import { motion } from "framer-motion";

import { styles } from "../styles";
import { remi } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Socials } from "../components";


const About = () => {

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>About me</p>
        <h2 className={styles.sectionHeadText}>Hi there</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className='flex'
      >
        <div className='w-2/3'>
          <p
            className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
          >
            I'm Rémi, a <strong className='text-[#915EFF]'>fullstack web3 developer</strong> and teacher.<br/>
            Currently i live in France and work as a <strong className='text-[#915EFF]'>freelance Blockchain Developer</strong>. 
          </p>
          <p
            className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
          >
            My projects include <strong className='text-[#915EFF]'>smart contracts</strong>, <strong className='text-[#915EFF]'>dApps</strong>, <strong className='text-[#915EFF]'>NFTs</strong> and <strong className='text-[#915EFF]'>blockchain games</strong>.<br/>

            But also <strong className='text-[#915EFF]'>UX/UI design</strong>, <strong className='text-[#915EFF]'>Databases design</strong> and <strong className='text-[#915EFF]'>API</strong>.<br/>

            Above all, I love learning new things, listening, collaborating, accompanying and teaching my clients.</p>
          <p
            className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
          >
            In my spare time I like to practice Bass Guitar, play video games, and play with my daughters. I’m always down for hearing about new projects, so feel free to drop me a line !
          </p>
          <Socials />
        </div>

        <div className='w-1/3 p-10 flex justify-center items-end'>
          <img className='rounded-md' src={remi} alt="Picture of Remi" />  
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");
