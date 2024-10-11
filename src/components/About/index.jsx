import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import styles from "./style.module.css";


export default function Index() {
  const paragraph = "Fullstack developer. Frontend and Web design enthusiast. Deep lover of learning and teaching. Blockchain technology advocate & builder. Currently based in France.";
  return (
    <div className={styles.about}>
      <h2>About</h2>
      <h3>Get to know me</h3>
      <div className={styles.aboutContainer}>
        <Paragraph paragraph={paragraph} />
        <div className={styles.aboutImage}>
          <Image
            src={'/images/hero_image.jpg'}
            alt="About picture"
            fill={true} 
            priority={true}
          />
        </div>
      </div>
      <Socials />
    </div>
  );
}


function Paragraph({paragraph}) {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"]
  })

  const words = paragraph.split(" ")
  return (
    <p 
      ref={container}         
      className={styles.paragraph}
    >
    {
      words.map( (word, i) => {
        const start = i / words.length
        const end = start + (1 / words.length)
        return <Word key={i} progress={scrollYProgress} range={[start, end]}>{word}</Word>
      })
    }
    </p>
  )
}

const Word = ({children, progress, range}) => {
  const opacity = useTransform(progress, range, [0, 1])
  return <span className={styles.word}>
    <span className={styles.shadow}>{children}</span>
    <motion.span style={{opacity: opacity}}>{children}</motion.span>
  </span>
}

function Socials() {
  return (
    <div className={styles.socials}>
      <Magnetic>
        <a href="https://github.com/0xRTekk/">
          <Image
            src="/images/github2.svg"
            alt="github icon"
            width={50}
            height={50}
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </a>
      </Magnetic>
      <Magnetic>
        <a href="https://www.linkedin.com/in/remi-sulpice">
          <Image
            src="/images/linkedin.svg"
            alt="linkedin icon"
            width={40}
            height={40}
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </a>
      </Magnetic>
      <Magnetic>
        <a href="mailto:remi.sulpice@proton.me">
          <Image
            src="/images/mail.svg"
            alt="mail icon"
            width={40}
            height={40}
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </a>
      </Magnetic>
    </div>
  );
};

function Magnetic({children}) {
    const ref = useRef(null);
    const [position, setPosition] = useState({x:0,y:0});

    const handleMouse = (e) => {
        const { clientX, clientY } = e;
        const {height, width, left, top} = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width/2)
        const middleY = clientY - (top + height/2)
        setPosition({x: middleX, y: middleY})
    }

    const reset = () => {
        setPosition({x:0, y:0})
    }

    const { x, y } = position;
    return (
        <motion.div
            style={{position: "relative"}}
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{x, y}}
            transition={{type: "spring", stiffness: 150, damping: 15, mass: 0.1}}
        >
            {children}
        </motion.div>
    )
}