"use client";

import { useEffect } from "react";
import './cursor.css';

export default function Cursor({
  size = 140,          // base diameter
  hoverSize = 180,     // diameter over links/buttons
  stiffness = 0.22,    // 0..1 (lower = more delay)
  ring = true,         // show normal outline ring?
}: {
  size?: number;
  hoverSize?: number;
  stiffness?: number;
  ring?: boolean;
}) {
  useEffect(() => {
    const isTouch = matchMedia("(pointer: coarse)").matches;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || reduce) return;

    // create nodes
    const lens = document.createElement("div");     // inverted blob (difference)
    lens.className = "cursor-invert";
    document.body.appendChild(lens);

    const ringEl = ring ? document.createElement("div") : null; // normal ring
    if (ringEl) {
      ringEl.className = "cursor-ring";
      document.body.appendChild(ringEl);
    }

    // state
    let targetX = -100;
    let targetY = -100;
    let x = targetX, y = targetY;
    let base = size;
    let current = base;

    const setSize = (d: number) => {
      current = d;
      lens.style.width = `${d}px`;
      lens.style.height = `${d}px`;
      if (ringEl) {
        ringEl.style.width = `${d}px`;
        ringEl.style.height = `${d}px`;
      }
    };

    const moveTo = (nx: number, ny: number) => {
      const left = nx - current / 2;
      const top = ny - current / 2;
      const t = `translate(${left}px, ${top}px)`;
      lens.style.transform = t;
      if (ringEl) ringEl.style.transform = t;
    };

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;

      // “action” hover
      const t = e.target as HTMLElement | null;
      const isAction = !!t?.closest("a,button,[role='button'],[data-cursor]");
      base = isAction ? hoverSize : size;
    };

    const onEnter = () => {
      lens.style.opacity = "1";
      if (ringEl) ringEl.style.opacity = "1";
    };
    const onLeave = () => {
      lens.style.opacity = "0";
      if (ringEl) ringEl.style.opacity = "0";
    };
    const onDown = () => setSize(base * 0.9);
    const onUp = () => setSize(base);

    // init visuals
    setSize(base);
    moveTo(x, y);
    lens.style.opacity = "0";
    if (ringEl) ringEl.style.opacity = "0";

    // raf loop
    let raf = 0;
    const frame = () => {
      x += (targetX - x) * stiffness;
      y += (targetY - y) * stiffness;

      // smooth resize toward base each frame
      const next = current + (base - current) * 0.18;
      if (Math.abs(next - current) > 0.1) setSize(next);

      moveTo(x, y);
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    // events
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseenter", onEnter);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    // show now
    onEnter();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      lens.remove();
      ringEl?.remove();
    };
  }, [hoverSize, size, stiffness, ring]);

  return null;
}
