import QoodLogo from "./QoodLogo";
import "./hero.css";

export default function Hero() {
  return (
    <section className="relative h-screen bg-hero overflow-hidden">
      
      {/* GRID OVERLAY */}
      <div
        className="absolute inset-0 grid pointer-events-none"
        style={{
          gridTemplateColumns: "2fr 2fr 5fr",
          gridTemplateRows: "1fr 2fr 1fr",
        }}
      >

        {Array.from({ length: 9 }).map((_, i) => {
          const isLastCol = (i + 1) % 3 === 0;
          const isLastRow = i >= 6;

          return (
            <div key={i} className="relative overflow-hidden w-full h-full">
              {/* vertical line */}
              {!isLastCol && (
                <span
                  className="
                    absolute right-0 top-0 h-full w-[2px]
                    bg-amber-200
                    origin-top
                    grid-line-vert
                  "
                  style={{ animationDelay: `${i * 80}ms` }}
                />
              )}

              {/* horizontal line */}
              {!isLastRow && (
                <span
                  className="
                    absolute left-0 bottom-0 w-full h-[2px]
                    bg-amber-200
                    origin-left
                    grid-line-horiz
                  "
                  style={{ animationDelay: `${i * 80}ms` }}
                />
              )}
            </div>
          );
        })}
      </div>

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
            <p className="text-md font-bold text-amber-100">
              Texto qualquer para ocupar espaço
            </p>
          </div>
          <div></div>
        </div>
        {/* CENTERED LOGO */}
        <div
          className="
            row-span-1
            col-span-full
            flex items-center justify-center
            px-[12vw] py-[5vh]
          "
          id="bound"
        >
          <QoodLogo />
        </div>
        <div className="row-span-1">

        </div>

        {/* SVG: row 3, col 3 (top-left) */}
        {/* <div className="col-start-3 row-start-3 flex items-start p-4">
        </div> */}

      </div>
    </section>
  );
}
