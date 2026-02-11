import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import PageOne from './pages/PageOne'
import PageTwo from './pages/PageTwo'
import PageThree from './pages/PageThree'
import PageFour from './pages/PageFour'

function App() {
  const [currentPage, setCurrentPage] = useState(1)

  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, 4))
  }

  return (
    <div
      className="min-h-screen overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at center, #fff5f5 0%, #fed7e2 100%)',
      }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {currentPage === 1 && (
          <PageOne key="page1" onContinue={goToNextPage} />
        )}
        {currentPage === 2 && (
          <PageTwo key="page2" onContinue={goToNextPage} />
        )}
        {currentPage === 3 && (
          <PageThree key="page3" onContinue={goToNextPage} />
        )}
        {currentPage === 4 && (
          <PageFour key="page4" />
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
