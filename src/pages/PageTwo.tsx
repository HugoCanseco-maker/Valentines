import { motion } from 'framer-motion'

const LYRICS = [
  'Unos ojos bañados de luz son un motivo',
  'Unos labios queriendo besar son un motivo',
  'Y me quedo mirandote aquí, encontrandote tantos motivos',
  'Yo concluyo que mi motivo mejor eres tu',
]

const INTRO_TEXT =
  "All the effort I put into us, whether big or small, for me will always be worth it. Because I have the most beautiful person I proudly call my girlfriend and hopeful valentine."

interface PageTwoProps {
  onContinue: () => void
}

export default function PageTwo({ onContinue }: PageTwoProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
      className="min-h-screen flex flex-col px-6 py-12 overflow-hidden relative"
      style={{
        background: 'radial-gradient(ellipse at center, #fff5f5 0%, #fed7e2 100%)',
      }}
    >
      {/* Header */}
      <motion.p
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="font-sans text-base md:text-lg text-rose-700/85 max-w-2xl text-center mx-auto leading-relaxed mb-12"
      >
        {INTRO_TEXT}
      </motion.p>

      {/* Song mention - subtle, near top lyrics */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="absolute top-24 left-1/2 -translate-x-1/2 font-sans text-xs text-rose-500/50 tracking-wide"
      >
        Motivos — Luis Miguel
      </motion.p>

      {/* Scattered lyrics */}
      <div className="flex-1 relative max-w-4xl mx-auto w-full">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="absolute top-4 left-0 md:left-4 font-cursive text-lg md:text-xl text-rose-600/90 max-w-[200px] md:max-w-[240px]"
        >
          {LYRICS[0]}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35 }}
          className="absolute top-4 right-0 md:right-4 font-cursive text-lg md:text-xl text-rose-600/90 max-w-[200px] md:max-w-[240px] text-right"
        >
          {LYRICS[1]}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-2 font-cursive text-base md:text-lg text-rose-600/80 max-w-[180px] md:max-w-[220px]"
        >
          {LYRICS[2]}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.45 }}
          className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-2 font-cursive text-base md:text-lg text-rose-600/80 max-w-[180px] md:max-w-[220px] text-right"
        >
          {LYRICS[3]}
        </motion.p>

        {/* Shrunk central content area - Continue button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <motion.button
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onContinue}
            className="px-10 py-4 rounded-[50px] font-sans font-medium text-white text-lg shadow-lg shadow-rose-300/40"
            style={{
              background: 'linear-gradient(135deg, #f43f5e 0%, #fb7185 100%)',
            }}
          >
            Continue
          </motion.button>
        </motion.div>
      </div>

      {/* Photo placeholders - bottom left and bottom right */}
      <div className="flex justify-between items-end gap-8 px-4 py-8 max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="w-32 h-40 md:w-40 md:h-48 rounded-2xl bg-white/50 border-2 border-rose-200/60 flex items-center justify-center shadow-sm"
        >
          <span className="font-sans text-rose-400/70 text-xs">Photo</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="w-32 h-40 md:w-40 md:h-48 rounded-2xl bg-white/50 border-2 border-rose-200/60 flex items-center justify-center shadow-sm"
        >
          <span className="font-sans text-rose-400/70 text-xs">Photo</span>
        </motion.div>
      </div>
    </motion.div>
  )
}
