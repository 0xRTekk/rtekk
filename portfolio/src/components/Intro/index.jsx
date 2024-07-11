'use client';
import React, { useLayoutEffect, useRef } from 'react'
import styles from './style.module.css';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Index() {

  const background = useRef(null);
  const introHeading = useRef(null);
  const introImage = useRef(null);
  const subHeadingLeft = useRef(null);
  const subHeadingRight = useRef(null);

  useLayoutEffect( () => {
    gsap.registerPlugin(ScrollTrigger);
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: true,
        start: "+=75px",
        end: "+=500px",
        markers: true
      },
    })

    timeline
      .to(background.current, {
        scale: 2.3,
        ease: "power1.out",
      })
      .to(introHeading.current, {y: "-300px", ease: "power1.inOut"}, 0)
      .to(introImage.current, {height: "200px"}, 0)
      .to(subHeadingLeft.current, {x: "-300px", opacity: 0, ease: "power1.inOut"}, 0)
      .to(subHeadingRight.current, {x: "300px", opacity: 0, ease: "power1.inOut"}, 0)
  }, [])

  return (
    <div className={styles.homeHeader}>
      <div className={styles.backgroundImage} ref={background}>
        <Image
          className={styles.backgroundImage}
          ref={background}
          src={'/images/elipse.svg'}
          fill={true}
          alt="background image"
          priority={true}
        />
      </div>
      <div className={styles.intro}>
        <Image
          ref={introHeading}
          className={styles.introHeading}
          src={'/images/hero_heading.svg'}
          alt="Hero name heading image"
          fill={true}
          priority={true}
        />

        <div ref={introImage} data-scroll data-scroll-speed="0.7" className={styles.introImage}>
          <Image
            src={'/images/intro.png'}
            alt="intro image"
            fill={true} 
            priority={true}
          />
        </div>
      </div>
      <div
        className={styles.introSubHeading}
      >
        <p
          ref={subHeadingLeft}
        >
          Fullstack Developer
        </p>
        <p
          ref={subHeadingRight}
        >
          Since 2017
        </p>
      </div>
    </div>
  )
}
