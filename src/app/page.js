"use client";

import { useEffect } from "react";

// import styles from "./page.module.css";

import Description from "@/components/description/Description";

import Projects from "@/components/projects/Projects";
import Intro from "@/components/intro/Intro";
import styles from "@/app/page.module.css";
import React from "react";

const Home = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <main className={styles.main}>
      <Intro></Intro>
      <Description></Description>
      <Projects></Projects>
    </main>
  );
};

export default Home;
