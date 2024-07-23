"use client";
import React, { useLayoutEffect, useRef } from "react";
import styles from "./style.module.css";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Index() {
  return (
    <div className={styles.skills}>
      <div className={styles.skillsHeader}>
        <h2>Tech stack</h2>
        <h3>My skills.</h3>
        <p>
          I build applications for your business results.
          <br />I design memorable digital experiences that represent your
          brand.
        </p>
      </div>

      <div className={styles.skillsContent}>
        <div className={styles.skillsGrid}>
          {/* React + Next */}
          <div
            className={`${styles.skillCard} ${styles.skillCard2}`}
            id={styles.reactNext}
          >
            <div className={styles.skillImage}>
              <Image
                src="/images/react.svg"
                width={70}
                height={70}
                alt="React Development"
              />
              <Image
                src="/images/next.svg"
                width={70}
                height={70}
                alt="Next Development"
              />
            </div>
            <h4 className={styles.skillTitle}>React.js & Next.js</h4>
            <p className={styles.skillText}>
              I specialize myself with React and Next to build reactive and
              optimized applications.
            </p>
          </div>
          {/* Typescript */}
          <div
            className={`${styles.skillCard} ${styles.skillCard1}`}
            id={styles.typescript}
          >
            <div className={styles.blueCircle}></div>
            <div className={styles.skillImage}>
              <Image
                src="/images/typescript.svg"
                width={70}
                height={70}
                alt="Typescript development"
              />
            </div>
            <h4 className={styles.skillTitle}>Typescript</h4>
            <p className={styles.skillText}>
              I build robust applications with Typescript to ensure code
              quality.
            </p>
          </div>
          {/* GSAP */}
          <div
            className={`${styles.skillCard} ${styles.skillCard1}`}
            id={styles.gsap}
          >
            <div className={`${styles.skillImage} ${styles.skillImageGSAP}`}>
              <Image
                src="/images/gsap.svg"
                width={70}
                height={70}
                alt="GSAP animations"
              />
              <Image
                src="/images/gsap.svg"
                width={70}
                height={70}
                alt="GSAP animations"
              />
              <Image
                src="/images/gsap.svg"
                width={70}
                height={70}
                alt="GSAP animations"
              />
            </div>
            <h4 className={styles.skillTitle}>GSAP Animations</h4>
            <p className={styles.skillText}>
              I use GSAP to create animations and memorable web experiences.
            </p>
          </div>
          {/* Figma */}
          <div
            className={`${styles.skillCard} ${styles.skillCard1}`}
            id={styles.figma}
          >
            <div className={`${styles.skillImage} ${styles.skillImageFigma}`}>
              <svg
                width="70"
                height="70"
                viewBox="0 0 396 534"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                id={styles.figmaSvg}
              >
                <path
                  d="M55 123.614C55 163.166 87.0626 195.229 126.614 195.229H198.229V52H126.614C87.0626 52 55 84.0636 55 123.614Z"
                  fill="#F24E1E"
                  id={styles.figmaRed}
                />
                <path
                  d="M198.229 52.001V195.229H269.843C309.395 195.229 341.458 163.166 341.458 123.614C341.458 84.0625 309.395 52.001 269.843 52.001H198.229Z"
                  fill="#FF7262"
                  id={styles.figmaOrange}
                />
                <path
                  d="M55 266.843C55 306.395 87.0626 338.458 126.614 338.458H198.229V195.229H126.614C87.0626 195.229 55 227.293 55 266.843Z"
                  fill="#A259FF"
                  id={styles.figmaPurple}
                />
                <path
                  d="M198.229 266.843C198.229 227.293 230.291 195.229 269.843 195.229C309.394 195.229 341.458 227.293 341.458 266.843C341.458 306.395 309.394 338.458 269.843 338.458C230.291 338.458 198.229 306.395 198.229 266.843Z"
                  fill="#1ABCFE"
                  id={styles.figmaBlue}
                />
                <path
                  d="M55 410.072C55 370.521 87.0626 338.458 126.614 338.458H198.229V410.072C198.229 449.624 166.166 481.687 126.614 481.687C87.0626 481.687 55 449.624 55 410.072Z"
                  fill="#0ACF83"
                  id={styles.figmaGreen}
                />
              </svg>
            </div>
            <h4 className={styles.skillTitle}>Figma</h4>
            <p className={styles.skillText}>
              I design memorable digital experiences with Figma that represent
              your brand.
            </p>
          </div>
          {/* Backend */}
          <div
            className={`${styles.skillCard} ${styles.skillCard3}`}
            id={styles.backend}
          >
            <div className={styles.skillImage}>
              <Image
                src="/images/nodejs.svg"
                width={70}
                height={70}
                alt="NodeJS Development"
              />
              <Image
                src="/images/symfony.svg"
                width={70}
                height={70}
                alt="Symfony Development"
              />
              <Image
                src="/images/prisma.svg"
                width={70}
                height={70}
                alt="Prisma ORM"
              />
            </div>

            <h4 className={styles.skillTitle}>
              Backeng development with Node.js and Symfony
            </h4>
            <p className={styles.skillText}>
              I build robust and scalable backend applications with Node.js,
              Symfony and relationnal databases.
              <br />
              REST API architecture is my solution of choice.
            </p>
          </div>
          {/* DevOps */}
          <div
            className={`${styles.skillCard} ${styles.skillCard2}`}
            id={styles.devops}
          >
            <div className={styles.skillImage}>
              <Image
                src="/images/jest.svg"
                width={70}
                height={70}
                alt="Testing"
              />
              <Image
                src="/images/docker.svg"
                width={70}
                height={70}
                alt="Docker containers"
              />
              <Image
                src="/images/github.svg"
                width={70}
                height={70}
                alt="Github Actions"
              />
            </div>
            <h4 className={styles.skillTitle}>
              DevOps with Jest, Docker and Github Actions
            </h4>
            <p className={styles.skillText}>
              I write tests to ensure the quality and the reliability of the
              applications. I use Docker to containerize applications and deploy
              them easily.
            </p>
          </div>
          {/* Other */}
          <div
            className={`${styles.skillCard} ${styles.skillCard2}`}
            id={styles.other}
          >
            <div className={styles.skillImage}>
              <Image
                src="/images/solidity.svg"
                width={70}
                height={70}
                alt="Blockchain Development"
              />
              <Image
                src="/images/python.svg"
                width={70}
                height={70}
                alt="python Development"
              />
              <Image
                src="/images/csharp.svg"
                width={70}
                height={70}
                alt="C sharp Development"
              />
            </div>
            <h4 className={styles.skillTitle}>
              Blockchain, Python and C# Development
            </h4>
            <p className={styles.skillText}>
              I build decentralized and Web3 applications with Solidity and
              other tools. I build applications with C# and .NET Core.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
