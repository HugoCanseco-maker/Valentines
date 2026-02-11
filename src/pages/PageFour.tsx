import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'

const heartShape = confetti.shapeFromText({ text: '❤️', scalar: 1.2 })

const FINAL_MESSAGE =
  "YIPEPEPPEPE!!! I cant wait to see you on the 14th and for what I have planed mwehehehhe. Happy Valentine's Pooks, love youuuuuu! ❤️❤️❤️"

function EnvelopeWithRose() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="flex flex-col items-center mb-8"
    >
      {/* Envelope */}
      <svg
        viewBox="0 0 100 70"
        className="w-36 h-28 md:w-44 md:h-32 text-rose-400/90"
      >
        <path
          d="M5 15 L50 40 L95 15 L95 65 L5 65 Z"
          fill="currentColor"
        />
        <path
          d="M5 15 L50 40 L95 15"
          fill="currentColor"
          fillOpacity="0.8"
        />
        <path d="M5 15 L50 40 L5 65" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
        <path d="M95 15 L50 40 L95 65" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
      </svg>
      {/* Rose below envelope */}
      <svg
        viewBox="0 0 64 64"
        className="w-20 h-20 md:w-24 md:h-24 -mt-2 text-rose-500"
      >
        <path
          d="M32 55 Q28 40 32 22 Q36 40 32 55"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M32 18 Q24 12 28 8 Q32 12 36 8 Q40 12 32 18"
          fill="currentColor"
          fillOpacity="0.95"
        />
        <path
          d="M28 14 Q20 10 24 6 Q32 10 40 6 Q44 10 36 14"
          fill="currentColor"
          fillOpacity="0.9"
        />
        <path
          d="M32 22 Q24 16 28 12 Q32 16 36 12 Q40 16 32 22"
          fill="currentColor"
        />
      </svg>
    </motion.div>
  )
}

export default function PageFour() {
  const hasFired = useRef(false)

  useEffect(() => {
    if (hasFired.current) return
    hasFired.current = true

    const duration = 4000
    const end = Date.now() + duration

    const frame = () => {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#f43f5e', '#fb7185', '#fda4af', '#fecdd3'],
        shapes: [heartShape],
      })
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#f43f5e', '#fb7185', '#fda4af', '#fecdd3'],
        shapes: [heartShape],
      })

      if (Date.now() < end) {
        requestAnimationFrame(frame)
      }
    }

    frame()
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
      className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at center, #fff5f5 0%, #fed7e2 100%)',
      }}
    >
      <EnvelopeWithRose />

      <motion.div
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ delay: 0.4, type: 'spring', stiffness: 200, damping: 20 }}
        className="text-center relative z-10 max-w-2xl"
      >
        <h1 className="font-serif text-2xl md:text-4xl font-bold text-rose-700 leading-relaxed">
          {FINAL_MESSAGE}
        </h1>
      </motion.div>
    </motion.div>
  )
}
