"use client";

import React, { useEffect, useRef } from "react";

import styles from "./style.module.css";

import Image from "next/image";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

const Intro = () => {
  const background = useRef(null);

  const introImage = useRef(null);

  const homeHeader = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: document.documentElement,

          scrub: true,

          start: "top",

          end: "+=500px",
        },
      });

      timeline

        .from(background.current, {
          clipPath: `inset(15%)`,
          // borderRadius: "50%",
        })

        .to(introImage.current, { height: "200px" }, 0);
    });
    return () => ctx.revert();
  }, []);

  return (
    <div ref={homeHeader} className={styles.homeHeader}>
      <div className={styles.backgroundImage} ref={background}>
        <Image
          src={"/background.jfif"}
          fill={true}
          alt="background image"
          priority={true}
        />
      </div>
      <div className={styles.intro}>
        <div
          ref={introImage}
          data-scroll
          data-scroll-speed="0.3"
          className={styles.introImage}
        >
          <Image
            src={"/img2.png"}
            alt="intro image"
            fill={true}
            priority={true}
          />
        </div>

        <h1
          data-scroll
          data-scroll-speed="0.7"
          style={{
            color: "white",
            filter: "brightness(300%)",
            fontWeight: "1000",
            textShadow: "15px 5px 20px red",
          }}
        >
          JUJUTSU KAISEN
        </h1>
      </div>
    </div>
  );
};

export default Intro;
