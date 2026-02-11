import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LYRICS = [
  'Una rosa pintada de azul, es un motivo',
  'Una simple estrellita de mar es un motivo',
  'Escribir un poema es facil, si existe un motivo',
  'Hasta puedo crear mundos nuevos en la fantasía',
  'Unos ojos bañados de luz son un motivo',
  'Unos labios queriendo besar son un motivo',
  'Y me quedo mirandote aquí, encontrandote tantos motivos',
  'Yo concluyo que mi motivo mejor eres tu',
]

const INTRO_TEXT =
  "All the effort I put in, whether big or small, that goes noticed or not, for me will always be worth it... because I have the most beautiful person I call my girlfriend and hopeful valentine."

interface PageTwoProps {
  onContinue: () => void
}

export default function PageTwo({ onContinue }: PageTwoProps) {
  const [lineIndex, setLineIndex] = useState(0)

  // Show current line (bold) + next line (40% opacity) - Spotify style
  const currentLine = LYRICS[lineIndex % LYRICS.length]
  const nextLine = LYRICS[(lineIndex + 1) % LYRICS.length]

  useEffect(() => {
    const interval = setInterval(() => {
      setLineIndex((prev) => prev + 1)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col items-center px-6 py-16 overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at top, #fff5f5 0%, #fed7e2 100%)',
      }}
    >
      <motion.p
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="font-sans text-base md:text-lg text-rose-700/80 max-w-2xl text-center leading-relaxed mb-16"
      >
        {INTRO_TEXT}
      </motion.p>

      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-xl">
        <div
          className="h-32 md:h-40 flex flex-col items-center justify-center overflow-hidden relative rounded-2xl px-8"
          style={{
            background: 'linear-gradient(135deg, rgba(180, 80, 100, 0.4) 0%, rgba(140, 50, 70, 0.5) 100%)',
            boxShadow: '0 8px 32px rgba(244, 63, 94, 0.2)',
          }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={lineIndex}
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -60, opacity: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.32, 0.72, 0, 1],
              }}
              className="flex flex-col items-center gap-4 absolute inset-0 justify-center"
            >
              <span
                className="font-serif text-xl md:text-2xl text-center font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.2)]"
                style={{ textShadow: '0 2px 12px rgba(0,0,0,0.15)' }}
              >
                {currentLine}
              </span>
              <span
                className="font-serif text-lg md:text-xl text-center opacity-40 text-white/90"
                style={{ textShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
              >
                {nextLine}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Lyric progress dots */}
        <div className="flex gap-2 mt-12">
          {LYRICS.map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full"
              animate={{
                backgroundColor: i === lineIndex % LYRICS.length ? '#f43f5e' : '#fda4af',
                scale: i === lineIndex % LYRICS.length ? 1.2 : 1,
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ y: -4, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onContinue}
        className="mt-12 px-10 py-4 rounded-[50px] font-sans font-medium text-white text-lg shadow-lg shadow-rose-300/40"
        style={{
          background: 'linear-gradient(135deg, #f43f5e 0%, #fb7185 100%)',
        }}
      >
        Continue
      </motion.button>
    </motion.div>
  )
}
