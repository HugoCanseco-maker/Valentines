import { motion } from 'framer-motion'

const LYRICS = [
  'Unos ojos bañados de luz son un motivo',
  'Unos labios queriendo besar son un motivo',
  'Y me quedo mirandote aquí, encontrandote tantos motivos',
  'Yo concluyo que mi motivo mejor eres tu',
]

const LETTER_TEXT =
  "To Allison, When I listen to songs like Motivos by Luis Miguel, what I am reminded of is you and our relationship that is honestly the greatest thing that has ever happened since meeting in Tokyo. It truly reminds me that all the sacrifices and effort truly isn't going to vain, and that we both feel comfortable to show our Love Language to each other, which for me is making this website to ask you one important question."

interface LyricFrameProps {
  children: React.ReactNode
  position: string
  delay?: number
}

function LyricFrame({ children, position, delay = 0 }: LyricFrameProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
      className={`absolute bg-white rounded-lg px-4 py-3 ${position}`}
      style={{
        border: '4px solid #5D4037',
        maxWidth: '200px',
      }}
    >
      <p className="font-cursive font-bold text-rose-700/90 text-sm md:text-base leading-relaxed">
        {children}
      </p>
    </motion.div>
  )
}

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
      className="min-h-screen flex flex-col overflow-auto relative"
      style={{
        background: 'radial-gradient(ellipse at center, #fff5f5 0%, #fed7e2 100%)',
      }}
    >
      {/* Four Corners - Lyric Frames */}
      <LyricFrame position="top-4 left-4" delay={0.2}>
        {LYRICS[0]}
      </LyricFrame>
      <LyricFrame position="top-4 right-4 text-right" delay={0.25}>
        {LYRICS[1]}
      </LyricFrame>
      <LyricFrame position="bottom-24 left-4" delay={0.3}>
        {LYRICS[2]}
      </LyricFrame>
      <LyricFrame position="bottom-24 right-4 text-right" delay={0.35}>
        {LYRICS[3]}
      </LyricFrame>

      {/* Middle Tier - Photo Placeholders */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-32 h-32 md:w-44 md:h-44 rounded-2xl bg-white/70 border-2 border-rose-200/60 flex items-center justify-center shadow-md"
      >
        <span className="font-sans text-rose-500/70 text-xs text-center px-2">Photo of Allison</span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-32 h-32 md:w-44 md:h-44 rounded-2xl bg-white/70 border-2 border-rose-200/60 flex items-center justify-center shadow-md"
      >
        <span className="font-sans text-rose-500/70 text-xs text-center px-2">Photo of us as a couple</span>
      </motion.div>

      {/* Centerpiece - The Letter (paper style) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.35, duration: 0.5 }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] max-w-lg px-6 py-6 rounded-sm"
        style={{
          background: '#faf6f0',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.04)',
        }}
      >
        <p className="font-sans text-rose-800/90 text-sm md:text-base leading-relaxed">
          {LETTER_TEXT}
        </p>
      </motion.div>

      {/* Continue button - very bottom, centered */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.button
          whileHover={{ y: -4, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onContinue}
          className="px-12 py-4 rounded-[50px] font-sans font-medium text-white text-lg shadow-lg shadow-rose-300/40"
          style={{
            background: 'linear-gradient(135deg, #f43f5e 0%, #fb7185 100%)',
          }}
        >
          Continue
        </motion.button>
      </motion.div>
    </motion.div>
  )
}
