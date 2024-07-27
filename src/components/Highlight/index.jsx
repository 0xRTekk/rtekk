"use client";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "./style.module.css";

export default function Index({ children }) {
  const highlightSection = useRef(null);

  // useLayoutEffect(() => {
  //   // gsap.registerPlugin(ScrollTrigger);
  //   // gsap.from(highlightSection.current, {
  //   //   scrollTrigger: {
  //   //     trigger: highlightSection.current,
  //   //     scrub: true,
  //   //     start: "0px 0px",
  //   //     end: "+=500px",
  //   //     // markers: true,
  //   //   },
  //   //   scale: 1.25,
  //   //   opacity: 0.2,
  //   //   bottom: "-350px",
  //   //   ease: "power1.out",
  //   // });
  //   gsap.registerPlugin(ScrollTrigger);
  //   const timeline = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: document.documentElement,
  //       scrub: true,
  //       start: "250px 0px",
  //       end: "+=200px",
  //       // markers: true
  //     },
  //   })

  //   timeline
  //     .to(highlightSection.current, {y: "-450px", ease: "power1.inOut"})
  //     .to(highlightSection.current, {opacity: "1", ease: "power1.inOut"}, 0)
  //     .to(highlightSection.current, {
  //       scale: 1,
  //       ease: "power1.inOut",
  //     }, 0)
  // }, []);

  return (
    <div ref={highlightSection} className={styles.highlight}>
      {children}
    </div>
  );
}
