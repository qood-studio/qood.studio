'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useLenis } from 'lenis/react';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const BUTTONS = [
  { label: 'About', color: '#0f172a' },
  { label: 'Video Editing', color: '#1e293b' },
  { label: 'Website Making', color: '#020617' },
  { label: 'Digital Marketing', color: '#020617' },
];

export default function AboutHorizontal() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const backgroundRef = useRef<HTMLDivElement | null>(null);
  const buttonsRef = useRef<HTMLAnchorElement[]>([]);
  const lenis = useLenis();

  useEffect(() => {
    if (!containerRef.current || !backgroundRef.current) return;

    const buttons = buttonsRef.current;
    const total = buttons.length;

    const ENTER_SCROLL = window.innerHeight * total * 1.6;
    const HOLD_SCROLL = window.innerHeight * 1.2;
    const EXIT_SCROLL = window.innerHeight * total * 1.2;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: true,
        start: 'top top',
        end: () =>
          `+=${ENTER_SCROLL + HOLD_SCROLL + EXIT_SCROLL}`,
        invalidateOnRefresh: true,
      },
    });

    /* ------------------------
       BACKGROUND ENTRANCE
    ------------------------ */

    tl.fromTo(
      backgroundRef.current,
      {
        scale: 0.5,
        rotateZ: 45,
        opacity: 0,
      },
      {
        scale: 1,
        rotateZ: 0,
        opacity: 1,
        ease: 'none',
        duration: 2,
      },
      `+=1`
    );

    /* ------------------------
       BUTTONS ENTER
    ------------------------ */

    buttons.forEach((btn, i) => {
      tl.fromTo(
        btn,
        {
          xPercent: 120,
          scale: 0.9,
        },
        {
          xPercent: 0,
          scale: 1,
          ease: 'none',
          duration: 2,
        },
        `+=${i * 0.3}` // stagger control
      );
    });

    /* ------------------------
       HOLD / RESISTANCE
    ------------------------ */

    tl.to({}, { duration: 2 });

    /* ------------------------
       EXIT (REVERSE ORDER)
    ------------------------ */

    [...buttons].reverse().forEach((btn) => {
      tl.to(
        btn,
        {
          xPercent: 120,
          scale: 0.9,
          ease: 'none',
          duration: 1,
        },
        '+=0'
      );
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, [lenis]);

  return (
    <section className="w-screen relative">
      <div
        ref={containerRef}
        className="h-screen w-screen relative overflow-hidden"
        style={{
          perspective: '1200px',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* BACKGROUND */}
        <div
          ref={backgroundRef}
          className="absolute inset-0 bg-black"
        />

        {/* BUTTON STACK */}
        <div className="absolute inset-0">
          {BUTTONS.map((btn, i) => (
            <Link
              href="/portfolio"
              key={btn.label}
              ref={(el) => {
                if (el){
                  (buttonsRef.current[i] = el)
                }
              }}
              className="absolute left-0 w-full flex items-center justify-center"
              style={{
                height: '25vh',
                top: `${i * 25}vh`,
                background: btn.color,
                zIndex: i + 1,
              }}
            >
              <span className="text-white text-6xl uppercase tracking-wide">
                {btn.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
