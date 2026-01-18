"use client";

import "../style/qood-logo.css";
import { useEffect, useRef } from "react";

/* ---------- tuning ---------- */
const LERP = 0.07;
const MAX_OFFSET_RATIO = 0.18;
const BLINK_MIN = 0;
const BLINK_SPEED = 0.08;
const BLINK_TIMES = 1;

export default function QoodLogo() {
  const svgRef = useRef<SVGSVGElement | null>(null);

  const holeRefs = useRef<SVGPathElement[]>([]);
  const oLetterRefs = useRef<SVGPathElement[]>([]);

  const currentOffset = useRef<{ x: number; y: number }[]>([]);
  const targetDir = useRef({ x: 0, y: 0 });

  const blinkValue = useRef(1);
  const blinkPhase = useRef<"closing" | "opening" | "done">("closing");
  const blinkCount = useRef(1);

  const introDone = useRef(false);
  const scriptedLook = useRef(0);

  /* ---------- mouse tracking ---------- */
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!svgRef.current || !introDone.current) return;

      const r = svgRef.current.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;

      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const len = Math.hypot(dx, dy) || 1;

      targetDir.current = { x: dx / len, y: dy / len };
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  /* ---------- intro timeline ---------- */
  useEffect(() => {
    setTimeout(() => (scriptedLook.current = 1), 650);   // right
    setTimeout(() => (scriptedLook.current = -1), 1250); // left
    setTimeout(() => {
      scriptedLook.current = 0;
      introDone.current = true;
    }, 1850);
  }, []);

  /* ---------- animation loop ---------- */
  useEffect(() => {
    let raf: number;

    const animate = () => {
      /* ---- blink value ---- */
      if (blinkPhase.current !== "done") {
        if (blinkPhase.current === "closing") {
          blinkValue.current -= BLINK_SPEED;
          if (blinkValue.current <= BLINK_MIN) {
            blinkValue.current = BLINK_MIN;
            blinkPhase.current = "opening";
          }
        } else {
          blinkValue.current += BLINK_SPEED;
          if (blinkValue.current >= 1) {
            blinkValue.current = 1;
            blinkPhase.current = "done";
          }
        }
      } else if (blinkCount.current <= BLINK_TIMES) {
        blinkPhase.current = "closing";
        blinkCount.current++;
      }

      /* ---- holes (movement only) ---- */
      holeRefs.current.forEach((hole, i) => {
        if (!hole) return;

        if (!currentOffset.current[i]) {
          currentOffset.current[i] = { x: 0, y: 0 };
        }

        const b = hole.getBBox();
        const max = (Math.min(b.width, b.height) / 2) * MAX_OFFSET_RATIO;

        let tx = 0;
        let ty = 0;

        if (!introDone.current) {
          tx = scriptedLook.current * max;
        } else {
          tx = targetDir.current.x * max;
          ty = targetDir.current.y * max;
        }

        currentOffset.current[i].x += (tx - currentOffset.current[i].x) * LERP;
        currentOffset.current[i].y += (ty - currentOffset.current[i].y) * LERP;

        hole.setAttribute(
          "transform",
          `translate(${currentOffset.current[i].x},
                     ${currentOffset.current[i].y})`
        );
      });

      /* ---- O LETTERS (blink only) ---- */
      oLetterRefs.current.forEach((o) => {
        if (!o) return;
        o.setAttribute(
          "transform",
          `scale(1 ${blinkValue.current})`
        );
      });

      raf = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 452 123"
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <mask id="logoMask" maskUnits="userSpaceOnUse">
          {/* full logo */}
          <g fill="white" fillRule="evenodd">
            {/* Q */}
            <path d="M111 99.125L101.875 122.938C83.625 121.625 71.9375 114.125 62.8125 105.562C60.3125 105.875 57.8125 106 55.25 106C23.9375 106 0 83.1875 0 53.1875C0 22.9375 24 0 55.3125 0C86.625 0 110.625 22.9375 110.625 53.1875C110.625 71.375 101.812 86.875 87.9375 96.3125C94.8125 97.9375 102.875 98.9375 111 99.125ZM27.0625 53C27.0625 68.5 39.3125 80.4375 55.3125 80.4375C71.3125 80.4375 83.5625 68.5 83.5625 53C83.5625 37.4375 71.3125 25.4375 55.3125 25.4375C39.3125 25.4375 27.0625 37.4375 27.0625 53Z" />

            {/* O */}
            <path
              ref={(el) => el && (oLetterRefs.current[0] = el)}
              d="M175.25 106C143.938 106 120 83.1875 120 53.1875C120 22.9375 144 0 175.312 0C206.625 0 230.625 22.9375 230.625 53.1875C230.625 83.1875 206.625 106 175.25 106Z"
              style={{ transformBox: "fill-box", transformOrigin: "center" }}
            />

            {/* O */}
            <path
              ref={(el) => el && (oLetterRefs.current[1] = el)}
              d="M294.875 106.438C263.562 106.438 239.625 83.625 239.625 53.625C239.625 23.375 263.625 0.4375 294.938 0.4375C326.25 0.4375 350.25 23.375 350.25 53.625C350.25 83.625 326.25 106.438 294.875 106.438Z"
              style={{ transformBox: "fill-box", transformOrigin: "center" }}
            />

            {/* D */}
            <path d="M396 2.6875C430.25 2.5625 451.188 21.6875 451.188 53.1875C451.188 84.4375 430.25 103.438 396 103.438H363.125V2.75L396 2.6875ZM395.562 78.25C413.438 78.25 424.375 68.75 424.375 53.125C424.375 37.3125 413.375 27.6875 395.312 27.6875H389.188V78.25H395.562Z" />
          </g>

          {/* animated holes */}
          <path
            ref={(el) => el && (holeRefs.current[0] = el)}
            fill="black"
            d="M174.312 80.4375C190.312 80.4375 202.562 68.5 202.562 53C202.562 37.4375 190.312 25.4375 174.312 25.4375C158.312 25.4375 146.062 37.4375 146.062 53C146.062 68.5 158.312 80.4375 174.312 80.4375Z"
          />

          <path
            ref={(el) => el && (holeRefs.current[1] = el)}
            fill="black"
            d="M293.938 80.875C309.938 80.875 322.188 68.9375 322.188 53.4375C322.188 37.875 309.938 25.875 293.938 25.875C277.938 25.875 265.688 37.875 265.688 53.4375C265.688 68.9375 277.938 80.875 293.938 80.875Z"
          />
        </mask>
      </defs>

      <rect width="100%" height="100%" fill="#ff7a18" mask="url(#logoMask)" />
    </svg>
  );
}
