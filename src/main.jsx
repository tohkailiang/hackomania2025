import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import LandingPage from './components/LandingPage.jsx'
import QuizPanel from './components/QuizPanel.jsx'
import GamePanel from './components/GamePanel.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GamePanel />
    <BrowserRouter>
      <div className="container" style={{display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden'}}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/quiz" element={
            <div style={{marginTop: 'auto', paddingBottom: '0px'}}>
              <QuizPanel quizbank="./data/quizbank.json" />
            </div>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  </StrictMode>,
)