"use client";
import { useEffect } from "react";
import styles from "./page.module.css";
import Intro from "../components/Hero";
import Description from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Highlight from "../components/Highlight";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <main className={styles.main}>
      <Intro />
      <Highlight>
        <Skills />
        <Projects />
      </Highlight>
      <Description />
    </main>
  );
}
