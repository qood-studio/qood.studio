import Image from 'next/image';

export default function VideoEditingSection() {
  return (
    <section className="bg- grid grid-cols-2 border-2 border-ink h-screen w-full">
      <div className="grid grid-rows-2">
        <div className="grid grid-cols-2">
          <div className="w-full border-r-solid border-r-2 border-r-ink">
            <Image
              src={'/video-editing/claquette.gif'}
              layout={'responsive'}
              height={175}
              width={175}
              alt={`A cute animal!`}
              unoptimized={true}
            />
          </div>
          <div className="w-full"></div>
        </div> {/** Claquete */}
        <div><h2 className="text-7xl text-ink uppercase">Video editing</h2></div> {/** Texto */}
      </div>
      <div></div> {/** Imagem + Projetos */}
    </section>
  )
}