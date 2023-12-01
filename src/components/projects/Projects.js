import React, { useState, useEffect, useRef } from "react";
import styles from "./style.module.css";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projects = [
  {
    title: "YUJI ITADORI",
    src: "img4.png",
  },
  {
    title: "SATORU GOJO",
    src: "img1.png",
  },
  {
    title: "RYOMEN SUKUNA",
    src: "img5.png",
  },
  {
    title: "MEGUMI FUSHIGURO",
    src: "img7.png",
  },
  {
    title: "NOBARA KUGISAKI",
    src: "img6.png",
  },
  {
    title: "SUGURU GETO",
    src: "suguru.jfif",
  },
  {
    title: "YUTA OKKOTSU",
    src: "yuta.jfif",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  const container = useRef(null);
  const imageContainer = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.create({
        trigger: imageContainer.current,
        pin: true,
        start: "top-=100px",
        end: document.body.offsetHeight - window.innerHeight - 50,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} className={styles.projects}>
      <div className={styles.projectDescription}>
        <div ref={imageContainer} className={styles.imageContainer}>
          <Image
            src={`/${projects[selectedProject].src}`}
            fill={true}
            alt="project image"
            priority={true}
            style={{ filter: "brightness(140%)" }}
          />
        </div>
        <div className={styles.column}>
          <p>
            Jujutsu Sorcerers are people who control the flow of Cursed Energy
            in their bodies, allowing them to use it as they please and also to
            reduce its release.
          </p>
        </div>
        <div className={styles.column}>
          <p>
            High-ranking Sorcerers and Curses can refine this energy and use it
            to perform Cursed Technique, which tend to be unique to the user or
            their family.
          </p>
        </div>
      </div>

      <div className={styles.projectList}>
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              onMouseOver={() => {
                setSelectedProject(index);
              }}
              className={styles.projectEl}
            >
              <h2>{project.title}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
