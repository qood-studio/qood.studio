import ClockComponent from './ClockComponent'
import './navbar.css'

export default function Navbar() {
  return (
    <div className="bg-transparent z-50 select-none w-20 top-0 h-screen flex flex-col justify-between border-r-3 border-solid border-ink sticky">
      <div className="py-2 px-4 flex items-center justify-center">
        <button
          aria-label="Toggle menu"
          id="nav-icon"
          className="relative z-60 flex flex-col justify-center items-center w-full"
        >
          <span className="block h-1 bg-ink" />
          <span className="block h-1 bg-ink" />
          <span className="block h-1 bg-ink" />
          <span className="block h-1 bg-ink" />
        </button>
      </div>
      <ClockComponent initialTime={new Date().toISOString()} />
      <div className='warning-stripe w-full h-[5vh]'></div>
    </div>
  )
}