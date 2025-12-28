import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-hero font-sans">
      {/* CENTER LOGO */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="
            relative
            w-[75vw]
            max-w-[900px]
            aspect-video

            sm:w-[80vw]
            md:w-[70vw]
            lg:w-[60vw]
            xl:w-[50vw]
          "
        >
          <Image
            fill
            className="object-contain"
            alt="QOOD logo."
            src="/hero/qood.png"
            priority
          />
        </div>
      </div>

      {/* RESPONSIVE TEXT BLOCK */}
      <div
        className="
          absolute
          inset-x-4 bottom-6
          text-center

          sm:inset-x-auto
          sm:bottom-6 sm:right-6
          sm:text-right

          md:bottom-10 md:right-10
        "
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light opacity-90">
          estratégia dentro do objetivo
        </h2>
        <strong className="block text-2xl sm:text-3xl md:text-4xl font-bold">
          criatividade fora da caixinha
        </strong>
      </div>
    </div>
  );
}
