import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col bg-[var(--bg)] border-solid border-t-[1px] border-t-gray-300 text-base text-[var(--ink)]">
      <div className="bg-[var(--bg)] flex flex-col md:flex-row">
        <div className="z-10 bg-[var(--bg)] border-r-[1px] border-r-gray-300 border-solid p-6 flex-3">

        </div>
        <div className="flex-4 flex flex-col bg-[var(--bg)] z-10">
          <div className="flex flex-row p-4 justify-start gap-16 flex-wrap border-solid border-t-[1px] border-t-gray-300 md:border-0">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semi-bold text-[var(--ink)]/60">Links Rápidos</h2>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semi-bold text-[var(--ink)]/60">Redes</h2>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semi-bold text-[var(--ink)]/60">Termos</h2>
            </div>
          </div>
          <div>
            {/**Logo da Empresa*/}
            <span></span>
          </div>
        </div>
      </div>

      <div className="bg-[var(--bg)] border-t border-solid border-t-gray-300 z-10 py-6 text-center flex flex-col md:flex-row justify-between px-4">
        <span className="text-[var(--ink)]">
          © {new Date().getFullYear()} Venturini & Andrade – Todos os direitos reservados.
        </span>
        <div>
          <span className="text-[var(--ink)]">
            © {new Date().getFullYear()} Desenvolvido por{" "}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              aria-label={"Linkedin do desenvolvedor do website."}
              className="text-[var(--accent)] underline font-bold"
              href="https://www.linkedin.com/in/gabriel-goncalves-costa/"
            >Gabriel</Link>
          </span>
        </div>
      </div>
    </footer>
  )
}
