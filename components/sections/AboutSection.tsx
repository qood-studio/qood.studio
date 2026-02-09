// components/sections/AboutSection.tsx
import { SectionHeader } from "@/components/ui/SectionHeader"
import Image from 'next/image';

export function AboutSection() {
  return (
    <section className="py-32 px-6 md:px-12">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Texto */}
        <div>
          <SectionHeader
            title="Criamos experiências digitais que conectam marcas e pessoas."
          />

          <p className="text-neutral-400 leading-relaxed text-lg">
            A qood studio é um estúdio criativo focado em design, tecnologia
            e storytelling. Desenvolvemos websites modernos, edições de vídeo
            impactantes e soluções visuais pensadas para comunicar, engajar
            e converter.
          </p>

          <p className="mt-6 text-neutral-400 leading-relaxed text-lg">
            Nosso foco é unir estética, performance e propósito — transformando
            ideias em produtos digitais memoráveis.
          </p>
        </div>

        {/* Visual */}
        <div className="relative h-[420px] rounded-2xl bg-neutral-900 border border-neutral-800 overflow-hidden">
          {/* Placeholder visual */}
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-black opacity-60" />
        </div>

      </div>
    </section>
  )
}
