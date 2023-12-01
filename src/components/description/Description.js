import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import styles from "./style.module.css";

const phrases = [
  "In Jujutsu Kaisen, all living beings emanate energy called Cursed Energy",
  "Which arises from negative emotions that naturally flow throughout the body",
  "As a result, they continually lose Cursed Energy, resulting in the birth of Curses",
  "A race of spiritual beings whose primary desire is to bring harm to humanity",
  "These Curses are shown as gruesome monsters, ghosts",
];

export default function Description() {
  return (
    <div className={styles.description}>
      {phrases.map((phrase, index) => {
        return <AnimatedText key={index}>{phrase}</AnimatedText>;
      })}
    </div>
  );
}

function AnimatedText({ children }) {
  const text = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(text.current, {
        scrollTrigger: {
          trigger: text.current,
          scrub: true,
          start: "300px bottom",
          end: "bottom+=400px bottom",
        },
        opacity: 0,
        left: "-200px",
        ease: "power5.Out",
        // fontWeight: "100",
      });
    });
    return () => ctx.revert();
  }, []);

  return <p ref={text}>{children}</p>;
}
