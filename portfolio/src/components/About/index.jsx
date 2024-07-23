import React, { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Image from 'next/image';
import styles from "./style.module.css";

const phrases = [
  "Fullstack developer",
  "Frontend and Web design enthusiast",
  "Deep lover of learning and teaching",
  "Blockchain technology advocate & builder",
  "Currently based in France",
];

export default function Index() {
  return (
    <div className={styles.description}>
      <h2>About</h2>
      <h3>Get to know me</h3>
      {phrases.map((phrase, index) => {
        return <AnimatedText key={index}>{phrase}</AnimatedText>;
      })}
      <Socials />
    </div>
  );
}

function AnimatedText({ children }) {
  const text = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(text.current, {
      scrollTrigger: {
        trigger: text.current,
        scrub: true,
        start: "0px bottom",
        end: "bottom+=250px bottom",
        // markers: true,
      },
      opacity: 0,
      left: "-200px",
      ease: "power3.Out",
    });
  }, []);

  return <p ref={text}>{children}</p>;
}

function Socials() {
  return (
    <div className={styles.socials}>
      <a href="https://github.com/0xRTekk/">
        <Image
          src="/images/github.png"
          alt="github icon"
          width={50}
          height={50}
          // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </a>
      <a href="www.linkedin.com/in/remi-sulpice">
        <Image
          src="/images/linkedin.svg"
          alt="linkedin icon"
          width={40}
          height={40}
          // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </a>
      <a href="mailto:remi.sulpice@proton.me">
        <Image
          src="/images/mail.svg"
          alt="mail icon"
          width={40}
          height={40}
          // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </a>
    </div>
  );
};