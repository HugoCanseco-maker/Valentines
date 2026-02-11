import { motion } from 'framer-motion'

const LYRICS = [
  'Unos ojos bañados de luz son un motivo',
  'Unos labios queriendo besar son un motivo',
  'Y me quedo mirandote aquí, encontrandote tantos motivos',
  'Yo concluyo que mi motivo mejor eres tu',
]

const INTRO_TEXT =
  "All the effort I put into us, whether big or small, for me will always be worth it. Because I have the most beautiful person I proudly call my girlfriend and hopeful valentine."

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
      className={`absolute bg-white rounded-lg px-4 py-3 shadow-sm ${position}`}
      style={{
        border: '4px solid #5D4037',
        maxWidth: '220px',
      }}
    >
      <p className="font-cursive font-bold text-rose-700/90 text-base md:text-lg leading-relaxed">
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
      className="min-h-screen flex flex-col px-6 py-10 overflow-auto"
      style={{
        background: 'radial-gradient(ellipse at center, #fff5f5 0%, #fed7e2 100%)',
      }}
    >
      {/* Header */}
      <motion.p
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="font-sans text-base md:text-lg text-rose-700/85 max-w-2xl text-center mx-auto leading-relaxed mb-8"
      >
        {INTRO_TEXT}
      </motion.p>

      {/* Scattered lyric frames - top and sides */}
      <div className="flex-1 relative min-h-[320px] max-w-4xl mx-auto w-full mb-6">
        <LyricFrame position="top-4 left-0 md:left-4" delay={0.25}>
          {LYRICS[0]}
          <span className="block font-sans font-normal text-xs text-amber-800/70 mt-2">Motivos — Luis Miguel</span>
        </LyricFrame>
        <LyricFrame position="top-4 right-0 md:right-4 text-right" delay={0.3}>
          {LYRICS[1]}
        </LyricFrame>
        <LyricFrame position="top-1/2 -translate-y-1/2 left-0 md:-left-2" delay={0.35}>
          {LYRICS[2]}
        </LyricFrame>
        <LyricFrame position="top-1/2 -translate-y-1/2 right-0 md:-right-2 text-right" delay={0.4}>
          {LYRICS[3]}
        </LyricFrame>
      </div>

      {/* The Letter - center/bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="max-w-2xl mx-auto mb-8 px-6 py-5 rounded-xl bg-white/80"
        style={{ border: '3px solid #5D4037' }}
      >
        <p className="font-sans text-rose-800/90 text-sm md:text-base leading-relaxed">
          {LETTER_TEXT}
        </p>
      </motion.div>

      {/* Continue button - very bottom */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        whileHover={{ y: -4, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onContinue}
        className="mx-auto px-12 py-4 rounded-[50px] font-sans font-medium text-white text-lg shadow-lg shadow-rose-300/40 mb-8"
        style={{
          background: 'linear-gradient(135deg, #f43f5e 0%, #fb7185 100%)',
        }}
      >
        Continue
      </motion.button>
    </motion.div>
  )
}
