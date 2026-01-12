'use client'

import { useEffect, useState } from 'react'
import clsx from 'clsx'

type TSpeed = 'slow' | 'normal' | 'fast'

interface TypewriterProps {
  texts: string[]
  speed?: TSpeed
  delay?: number
  pause?: number
  className?: string
  showCaret?: boolean
}

const SPEEDS: Record<TSpeed, number> = {
  slow: 120,
  normal: 70,
  fast: 40,
}

function getCommonPrefix(a: string, b: string) {
  let i = 0
  while (i < a.length && i < b.length && a[i] === b[i]) i++
  return a.slice(0, i)
}

export default function Typewriter({
  texts,
  speed = 'normal',
  delay = 0,
  pause = 1,
  className,
  showCaret = true,
}: TypewriterProps) {
  const typingSpeed = SPEEDS[speed]

  const [textIndex, setTextIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [started, setStarted] = useState(delay === 0)
  const [targetPrefix, setTargetPrefix] = useState('')

  const currentText = texts[textIndex]
  const nextText = texts[(textIndex + 1) % texts.length]

  /* Initial delay */
  useEffect(() => {
    if (delay === 0) return
    const t = setTimeout(() => setStarted(true), delay * 1000)
    return () => clearTimeout(t)
  }, [delay])

  useEffect(() => {
    if (!started) return

    const timeout = setTimeout(() => {
      /* ---------------- Typing ---------------- */
      if (!isDeleting) {
        const next = currentText.slice(0, displayed.length + 1)
        setDisplayed(next)

        if (next === currentText) {
          const common = getCommonPrefix(currentText, nextText)
          setTargetPrefix(common)

          setTimeout(() => {
            setIsDeleting(true)
          }, pause * 1000)
        }
      }

      /* ---------------- Smart Deleting ---------------- */
      else {
        if (displayed.length > targetPrefix.length) {
          setDisplayed(displayed.slice(0, -1))
        } else {
          // switch to next phrase and start typing remainder
          setIsDeleting(false)
          setTextIndex((i) => (i + 1) % texts.length)
        }
      }
    }, isDeleting ? typingSpeed / 2 : typingSpeed)

    return () => clearTimeout(timeout)
  }, [
    displayed,
    isDeleting,
    currentText,
    nextText,
    targetPrefix,
    started,
    typingSpeed,
    pause,
    texts.length,
  ])

  return (
    <span className={clsx('inline-flex items-center', className)}>
      <span>{displayed}</span>
      {showCaret && <Caret />}
    </span>
  )
}

/* ---------------- Caret ---------------- */

function Caret() {
  return (
    <span
      className="ml-1 inline-block h-[1em] w-[1px] bg-current animate-blink"
      aria-hidden
    />
  )
}
