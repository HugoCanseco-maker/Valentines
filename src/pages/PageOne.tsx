import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const TARGET_DATE = new Date('2026-02-14T09:00:00')

function formatTimeLeft(ms: number) {
  const days = Math.floor(ms / (1000 * 60 * 60 * 24))
  const hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((ms % (1000 * 60)) / 1000)

  return {
    days: days.toString().padStart(2, '0'),
    hours: hours.toString().padStart(2, '0'),
    minutes: minutes.toString().padStart(2, '0'),
    seconds: seconds.toString().padStart(2, '0'),
  }
}

interface PageOneProps {
  onContinue: () => void
}

export default function PageOne({ onContinue }: PageOneProps) {
  const [timeLeft, setTimeLeft] = useState(TARGET_DATE.getTime() - Date.now())

  useEffect(() => {
    const interval = setInterval(() => {
      const remaining = TARGET_DATE.getTime() - Date.now()
      setTimeLeft(remaining >= 0 ? remaining : 0)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const { days, hours, minutes, seconds } = formatTimeLeft(timeLeft)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at center, #fef7f9 0%, #fff5f5 50%, #fed7e2 100%)',
      }}
    >
      {/* Heartbeat pulse animation in center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="w-64 h-64 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #f43f5e 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #f43f5e 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.3,
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-12 px-6">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-serif text-3xl md:text-4xl text-rose-500/90 tracking-wide"
        >
          Countdown to Valentine's
        </motion.h1>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex gap-3 md:gap-6 font-serif"
        >
          <TimeUnit value={days} label="Days" />
          <span className="text-rose-400/70 text-2xl font-light">:</span>
          <TimeUnit value={hours} label="Hours" />
          <span className="text-rose-400/70 text-2xl font-light">:</span>
          <TimeUnit value={minutes} label="Min" />
          <span className="text-rose-400/70 text-2xl font-light">:</span>
          <TimeUnit value={seconds} label="Sec" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="font-sans text-rose-500/70 text-sm md:text-base"
        >
          February 14, 2026 · 9:00 AM
        </motion.p>

        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          whileHover={{ y: -4, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onContinue}
          className="px-10 py-4 rounded-[50px] font-sans font-medium text-white text-lg shadow-lg shadow-rose-300/40 hover:shadow-xl hover:shadow-rose-300/50 transition-shadow duration-300"
          style={{
            background: 'linear-gradient(135deg, #f43f5e 0%, #fb7185 100%)',
          }}
        >
          Click for a quick journeyyyyy
        </motion.button>
      </div>
    </motion.div>
  )
}

function TimeUnit({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-serif text-4xl md:text-6xl font-semibold text-rose-600/90 tabular-nums">
        {value}
      </span>
      <span className="font-sans text-xs md:text-sm text-rose-500/60 uppercase tracking-wider mt-1">
        {label}
      </span>
    </div>
  )
}
