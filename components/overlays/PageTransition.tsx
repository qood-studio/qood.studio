'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { usePathname } from 'next/navigation';

export default function PageTransition() {
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ref.current,
      { yPercent: 100 },
      { yPercent: 0, duration: 1.4, ease: 'power4.out' }
    ).to(ref.current, {
      yPercent: -100,
      duration: 1,
      ease: 'power4.inOut',
    });

    return () => {
      tl.kill();
    };
  }, [pathname]);

  return (
    <div
      ref={ref}
      className="fixed inset-0 z-[9998] bg-black pointer-events-none"
    />
  );
}
