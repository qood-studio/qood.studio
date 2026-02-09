import QoodLogo from "../../QoodLogo";
import * as motion from "motion/react-client"
import "./hero.css";
import Typewriter from "@/components/Typewriter";
import DustParticles from "@/components/DustParticles";

export default function Hero() {
  return (
    <section className="bg-transparent relative h-screen overflow-hidden">
      <DustParticles />
      {/* <div
        className="absolute inset-0 grid pointer-events-none"
        style={{
          gridTemplateColumns: "2fr 2fr 5fr",
          gridTemplateRows: "1fr 2fr 1fr",
        }}
      >

        {Array.from({ length: 9 }).map((_, i) => {
          const isLastCol = (i + 1) % 3 === 0;
          const isLastRow = i >= 6;
          const isMiddleCol = (i + 2) % 3 === 0;
          const isMiddleRow = i < 6 && i > 2;
          let verticalAnimationOrigin = ""
          let horizontalAnimationOrigin = "";
          
          if (isLastRow) {
            verticalAnimationOrigin = "origin-bottom";
          } else if (!isMiddleRow) {
            verticalAnimationOrigin = "origin-top";
          }

          if (isLastCol) {
            horizontalAnimationOrigin = "origin-right";
          } else if (!isMiddleCol) {
            horizontalAnimationOrigin = "origin-left";
          }

          return (
            <div key={i} className="relative overflow-hidden w-full h-full">
              {!isLastCol && (
                <span
                  className={`
                    absolute right-0 top-0 h-full w-[3px]
                    bg-[var(--QOOD_ORANGE)]
                    ${verticalAnimationOrigin}
                    grid-line-vert
                  `}
                  style={{ animationDelay: `${i * 80}ms` }}
                />
              )}

              {!isLastRow && (
                <span
                  className={`
                    absolute left-0 bottom-0 w-full h-[3px]
                    bg-[var(--QOOD_ORANGE)]
                    ${horizontalAnimationOrigin}
                    grid-line-horiz
                  `}
                  style={{ animationDelay: `${i * 80}ms` }}
                />
              )}
            </div>
          );
        })}
      </div> */}

      {/* CONTENT LAYER*/}
      <div
        className="
          relative z-10 grid h-full
          grid-rows-[1fr_2fr_1fr]
        "
      >
        <div className="row-span-1 grid grid-cols-[2fr_2fr_5fr]">
          <div></div>
          <div className="flex items-end">
            <Typewriter
              speed="slow"
              delay={0.5}
              texts={["experiences in motion", "made for humans", "made by qood" ]}
              className="text-3xl font-bold text-ink font-sans"
            />
          </div>
          <div className=""></div>
        </div>
        {/* CENTERED LOGO */}
        <div
          className="
            row-span-1
            col-span-full
            flex items-center justify-center
            px-[14vw] py-[5vh]
          "
          id="bound"
        >
          <QoodLogo />
        </div>
        <div className="row-span-1 grid grid-cols-[2fr_2fr_5fr]">
          {/* <div>
            <motion.div
                initial={{ opacity: 0, x: -400, y: 200 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{
                  delay: 15 * 0.09,
                  duration: 0.5,
                  ease: [0.2, 0.65, 0.3, 0.9],
                }}
              className="rotate-45 "
            >
              <span className="text-ink font-bold uppercase text-8xl font-mono">Motion</span>
            </motion.div>
          </div> */}
          <div></div>
          <div></div>
        </div>

        {/* SVG: row 3, col 3 (top-left) */}
        {/* <div className="col-start-3 row-start-3 flex items-start p-4">
        </div> */}

      </div>
    </section>
  );
}
