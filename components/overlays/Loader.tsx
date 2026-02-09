'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const MIN_DURATION = 1000; // ms

export default function Loader({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const start = performance.now();

    (async () => {
      // Optional but recommended
      await document.fonts.ready;

      const elapsed = performance.now() - start;
      const remaining = Math.max(0, MIN_DURATION - elapsed);

      setTimeout(() => {
        gsap.to(ref.current, {
          opacity: 0,
          duration: 1,
          ease: 'power2.out',
          onComplete,
        });
      }, remaining);
    })();

    return () => {
      gsap.killTweensOf(ref.current);
    };
  }, [onComplete]);

  return (
    <div
      ref={ref}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white"
    >
      <span className="text-3xl tracking-widest">QOOD</span>
    </div>
  );
}
