import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const tiltOptions = {
    reverse:        true,  // reverse the tilt direction
    max:            15,     // max tilt rotation (degrees)
    perspective:    1300,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1,    // 2 = 200%, 1.5 = 150%, etc..
    speed:          2000,   // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,    // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(0.45,0.05,0.55,0.95)",    // Easing on enter/exit.
  };

  return (
    <>
      <section className={`relative top-[120px] w-full h-screen mx-auto flex flex-row`}>

        <Tilt className='w-1/2' options={tiltOptions}>
          <ComputersCanvas />
        </Tilt>

        <div
          className={`inset-0 w-1/2 mx-auto ${styles.paddingX}`}
        >
          <div>
            <h1 className={`${styles.heroHeadText} text-white mb-9`}>
              Hi, I'm <span className='text-[#915EFF]'>Rémi</span> 👋
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I'm a <strong className='text-[#915EFF]'>fullstack</strong> developer
            </p>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I build web & <strong className='text-[#915EFF]'>blockchain</strong> applications
            </p>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            And I <strong className='text-[#915EFF]'>teach</strong> web development too
            </p>
          </div>
        </div>

        <div className='absolute xs:bottom-40 bottom-32 w-full flex justify-center items-center'>
          <a href='#skills'>
            <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className='w-3 h-3 rounded-full bg-secondary mb-1'
              />
            </div>
          </a>
        </div>
        
      </section>

    </>
  );
};

export default Hero;
