"use client";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "./style.module.css";

export default function Index({ children }) {
  const highlightSection = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(highlightSection.current, {
      scrollTrigger: {
        trigger: highlightSection.current,
        scrub: true,
        start: "0px bottom",
        end: "+=850px",
        // markers: true,
      },
      scale: 1.25,
      opacity: 0.2,
      bottom: "-350px",
      ease: "power1.out",
    });
  }, []);

  return (
    <div ref={highlightSection} className={styles.highlight}>
      {children}
    </div>
  );
}
