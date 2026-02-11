import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'

const heartShape = confetti.shapeFromText({ text: '❤️', scalar: 1.2 })

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
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at center, #fff5f5 0%, #fed7e2 100%)',
      }}
    >
      <motion.div
        initial={{ scale: 0.8, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ delay: 0.3, type: 'spring', stiffness: 200, damping: 20 }}
        className="text-center relative z-10"
      >
        <h1 className="font-serif text-4xl md:text-6xl font-bold text-rose-700 mb-6">
          Yay! I can't wait to see you on the 14th! ❤️
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="font-sans text-rose-600/80 text-lg"
        >
          Happy Valentine's, Allison
        </motion.p>
      </motion.div>

      {/* Optional: Sound placeholder area */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-16 p-6 rounded-2xl bg-white/30 backdrop-blur-sm border border-rose-200/50 max-w-md"
      >
        <p className="font-sans text-rose-600/70 text-sm text-center">
          🎵 Optional: Add a romantic background track here
        </p>
      </motion.div>
    </motion.div>
  )
}
