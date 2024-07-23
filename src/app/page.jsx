"use client";
import { useEffect } from "react";
// import LocomotiveScroll from 'locomotive-scroll';
import Intro from "../components/Hero";
import Description from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Highlight from "../components/Highlight";
import Footer from "../components/Footer";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <main>
      <Intro />
      <Highlight>
        <Skills />
        <Projects />
      </Highlight>
      <Description />
      <Footer />
    </main>
  );
}
