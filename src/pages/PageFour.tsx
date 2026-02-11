import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'

const heartShape = confetti.shapeFromText({ text: '❤️', scalar: 1.2 })

const FINAL_MESSAGE =
  "YIPPEE!!! I can't wait to see you on the 14th and for what I have planned mwehehehhe. Happy Valentine's Pooks, love youuuuuu! ❤️❤️❤️"

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
      {/* Snoopy and Woodstock image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mb-8"
      >
        <img
          src="/snoopy-woodstock.png"
          alt="Snoopy and Woodstock"
          className="w-48 h-48 md:w-64 md:h-64 object-contain rounded-2xl"
        />
      </motion.div>

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
