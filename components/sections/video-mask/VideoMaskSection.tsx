'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from './VideoMaskSection.module.css';
import { SplitText } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

export default function VideoMaskSection() {
  const container = useRef<HTMLDivElement>(null);
  const stickyMask = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement | null>(null);
  const textsToDisplay: string[] = [
    "Every project is unique",
  ];

  useEffect(() => {
    const letters = new SplitText(textRef.current, {type: "chars"}).chars;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        pin: true,
        scrub: true,
        start: 'top top',
        end: '+=800%',
        anticipatePin: 1,
      },
    });

    // Mask growing
    tl.to(stickyMask.current, {
      maskSize: '3000%',
      webkitMaskSize: '3000%',
      ease: 'power2.in',
      duration: 1,
      delay: 0.2
    });

    tl.to(textRef.current, {
      opacity: 1,
      duration: 0.01,
    });
    
    // Text appears
    tl.fromTo(
      letters,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.03,
        ease: 'power2.in',
      }
    );

    // hold text
    tl.to({}, {duration: 0.8});

    // text out
    tl.to(letters, {
      y: -50,
      opacity: 0,
      stagger: 0.02,
      ease: 'power2.out',
    });

    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <section ref={container} className={styles.container}>
      <div ref={stickyMask} className={styles.stickyMask}>
        <h2
          className={styles.textToDisplay}
          aria-label={textsToDisplay[0]}
          ref={textRef}
        >
          {textsToDisplay[0]}
        </h2>
        <video autoPlay muted loop playsInline>
          <source src="/video-mask/waterfall_4k.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
