import { motion } from 'framer-motion'

const LYRICS = {
  topLeft: 'Unos ojos bañados de luz son un motivo',
  topRight: 'Unos labios queriendo besar son un motivo',
  bottomLeft: 'Y me quedo mirandote aquí, encontrandote tantos motivos',
  bottomRight: 'Yo concluyo que mi motivo mejor eres tu',
}

const LETTER_TEXT =
  "To Allison, When I listen to songs like Motivos by Luis Miguel, what I am reminded of is you and our relationship that is honestly the greatest thing that has ever happened since meeting in Tokyo. It truly reminds me that all the sacrifices and effort truly isn't in vain, and that we both feel comfortable to show our Love Language to each other, which for me is making this website to ask you one important question."

interface LyricFrameProps {
  children: React.ReactNode
  gridArea: string
  textAlign?: 'left' | 'right'
  delay?: number
}

function LyricFrame({ children, gridArea, textAlign = 'left', delay = 0 }: LyricFrameProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
      className="bg-white rounded-lg px-3 py-2 md:px-4 md:py-3 flex items-center justify-center min-w-0"
      style={{
        gridArea,
        border: '4px solid #5D4037',
        textAlign,
      }}
    >
      <p className="font-cursive font-bold text-[#3E2723] text-xs md:text-sm leading-relaxed">
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
      className="h-screen overflow-hidden grid gap-4 p-4 md:p-6 md:gap-6"
      style={{
        background: 'radial-gradient(ellipse at center, #fff5f5 0%, #fed7e2 100%)',
        gridTemplateColumns: '1fr minmax(260px, 1.2fr) 1fr',
        gridTemplateRows: 'auto 1fr auto auto',
        gridTemplateAreas: `
          "top-left     .           top-right"
          "left-photo   letter      right-photo"
          "bottom-left  .           bottom-right"
          "button       button      button"
        `,
      }}
    >
      {/* Four Corner Lyrics */}
      <LyricFrame gridArea="top-left" delay={0.15}>
        {LYRICS.topLeft}
      </LyricFrame>
      <LyricFrame gridArea="top-right" textAlign="right" delay={0.2}>
        {LYRICS.topRight}
      </LyricFrame>
      <LyricFrame gridArea="bottom-left" delay={0.25}>
        {LYRICS.bottomLeft}
      </LyricFrame>
      <LyricFrame gridArea="bottom-right" textAlign="right" delay={0.3}>
        {LYRICS.bottomRight}
      </LyricFrame>

      {/* Side Photo Placeholders - vertical rectangles */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="rounded-2xl bg-white/80 border-2 border-rose-200/60 flex items-center justify-center shadow-md min-h-0"
        style={{ gridArea: 'left-photo' }}
      >
        <span className="font-sans text-rose-500/70 text-xs text-center px-3">
          Photo of Allison
        </span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="rounded-2xl bg-white/80 border-2 border-rose-200/60 flex items-center justify-center shadow-md min-h-0"
        style={{ gridArea: 'right-photo' }}
      >
        <span className="font-sans text-rose-500/70 text-xs text-center px-3">
          Photo of us as a couple
        </span>
      </motion.div>

      {/* Centerpiece - The Paper Letter */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="rounded-sm overflow-auto min-h-0 flex items-center"
        style={{
          gridArea: 'letter',
          background: '#fffdf5',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.04)',
        }}
      >
        <p
          className="font-sans text-rose-800/90 text-sm md:text-base leading-relaxed w-full"
          style={{ padding: '2rem' }}
        >
          {LETTER_TEXT}
        </p>
      </motion.div>

      {/* Continue Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex justify-center items-center pt-2 z-10"
        style={{ gridArea: 'button' }}
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
