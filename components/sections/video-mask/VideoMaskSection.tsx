'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from './VideoMaskSection.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function VideoMaskSection() {
  const container = useRef<HTMLDivElement>(null);
  const stickyMask = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // gsap.set(stickyMask.current, {
    //   maskSize: '80% 100%',
    //   WebkitMaskSize: '80% 100%',
    //   transformOrigin: '50% 50%',
    // });

    gsap.to(stickyMask.current, {
      maskSize: '3000%',
      WebkitMaskSize: '3000%',
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: container.current,
        start: 'top top',
        end: '+=300%',
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <section ref={container} className={styles.container}>
      <div ref={stickyMask} className={styles.stickyMask}>
        <video autoPlay muted loop playsInline>
          <source src="/video-mask/waterfall_4k.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
