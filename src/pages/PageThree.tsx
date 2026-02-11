import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const HEADLINE =
  "Allison Lin, the most beautiful woman on earth and beyond the galaxies and multiverse that exist who I'm proud to call my girlfriend and partner in crime, will you be my valentine?"

const NO_ATTEMPTS_BEFORE_LOCK = 5

const BEAR_GIF = "https://media.tenor.com/2912093415419701311/tenor.gif"

interface PageThreeProps {
  onContinue: () => void
}

export default function PageThree({ onContinue }: PageThreeProps) {
  const [noClicks, setNoClicks] = useState(0)
  const [noButtonPos, setNoButtonPos] = useState({ left: 'calc(50% + 80px)', top: '58%' })
  const [yesScale, setYesScale] = useState(1)
  const [isLocked, setIsLocked] = useState(false)

  const getRandomPosition = useCallback(() => {
    const padding = 100
    const maxLeft = window.innerWidth - padding * 2
    const maxTop = window.innerHeight - padding * 2
    return {
      left: `${padding + Math.random() * maxLeft}px`,
      top: `${padding + Math.random() * maxTop}px`,
    }
  }, [])

  const handleNoClick = () => {
    const newCount = noClicks + 1
    setNoClicks(newCount)
    setNoButtonPos(getRandomPosition())
    setYesScale(1 + newCount * 0.1)

    if (newCount >= NO_ATTEMPTS_BEFORE_LOCK) {
      setIsLocked(true)
    }
  }

  const handleYesClick = () => {
    onContinue()
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
      className="min-h-screen flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at center, #fff5f5 0%, #fed7e2 100%)',
      }}
    >
      {/* Milk and Mocha bear GIF - centered above question */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="mb-6"
      >
        <img
          src={BEAR_GIF}
          alt="Cute bear hug"
          className="w-32 h-32 md:w-40 md:h-40 object-contain rounded-2xl"
        />
      </motion.div>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="font-serif text-2xl md:text-3xl lg:text-4xl text-center text-rose-700/90 max-w-4xl leading-relaxed mb-12"
      >
        {HEADLINE}
      </motion.h2>

      <div className="flex justify-center items-center relative min-h-[120px]">
        <AnimatePresence mode="wait">
          {!isLocked ? (
            <motion.div
              key="buttons"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center justify-center gap-6 relative"
            >
              <motion.button
                animate={{ scale: yesScale }}
                whileHover={{ y: -4, scale: yesScale * 1.05 }}
                whileTap={{ scale: yesScale * 0.98 }}
                onClick={handleYesClick}
                className="relative z-10 px-12 py-4 rounded-[50px] font-sans font-semibold text-white text-xl shadow-lg shadow-rose-300/40"
                style={{
                  background: 'linear-gradient(135deg, #f43f5e 0%, #fb7185 100%)',
                }}
              >
                Yes
              </motion.button>

              <motion.button
                initial={false}
                animate={{
                  left: noButtonPos.left,
                  top: noButtonPos.top,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNoClick}
                className="fixed px-10 py-3 rounded-[50px] font-sans font-medium text-rose-600 bg-white/90 border-2 border-rose-300 shadow-md hover:bg-white z-20 cursor-pointer -translate-x-1/2 -translate-y-1/2"
              >
                No
              </motion.button>
            </motion.div>
          ) : (
            <motion.button
              key="fullscreen-yes"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              onClick={handleYesClick}
              className="fixed inset-0 z-50 flex items-center justify-center w-full h-full font-serif text-3xl md:text-5xl font-bold text-white cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, #f43f5e 0%, #fb7185 100%)',
              }}
            >
              <span className="animate-pulse">Yes! 💕</span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
