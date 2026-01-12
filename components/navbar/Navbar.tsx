import './navbar.css'

export default function Navbar() {
  return (
    <div className="bg-hero select-none w-20 top-0 h-screen flex flex-col justify-between border-r-2 border-solid border-(--QOOD_WHITE) sticky">
      <div className="py-2 px-4 flex items-center justify-center">
        <button
          aria-label="Toggle menu"
          id="nav-icon"
          className="relative z-60 flex flex-col justify-center items-center w-full"
        >
          <span className="block h-1 bg-(--QOOD_WHITE)" />
          <span className="block h-1 bg-(--QOOD_WHITE)" />
          <span className="block h-1 bg-(--QOOD_WHITE)" />
          <span className="block h-1 bg-(--QOOD_WHITE)" />
        </button>
      </div>
        <div className='flex flex-col items-center justify-center text-(--QOOD_WHITE) -rotate-90 font-mono text-2xl'>
          <span className='text-center text-nowrap'>2026.01.12</span>
          <span className='text-center text-nowrap'>04:05:00</span>
        </div>
      <div className='warning-stripe w-full h-[5vh]'></div>
    </div>
  )
}