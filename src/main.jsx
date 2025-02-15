import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import LandingPage from './components/LandingPage.jsx'
import QuizPanel from './components/QuizPanel.jsx'
import GamePanel from './components/GamePanel.jsx'
import User from './data/User.js'
import ImagePoker from './pixie/ImagePoker.jsx'

const user = new User();

createRoot(document.getElementById('root')).render(

    <BrowserRouter>
      <div className="container" style={{position:'relative', zIndex:'1', display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden'}}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/quiz" element={
            <>
              <div>
                <GamePanel />
              </div>
              <div style={{marginTop: 'auto', paddingBottom: '0px'}}>
                <QuizPanel quizbank="./data/quizbank.json" />
              </div>
            </>
          } />
        </Routes>
      </div>
        <div style={{position:'absolute', bottom: '10px', left: '10px', zIndex:'2'}}>
        <ImagePoker image={"sprites/chicken.png"}></ImagePoker>
        </div>
        <div style={{position:'absolute', bottom: '10px', right: '10px', zIndex:'2'}}>
        <ImagePoker image={"sprites/rooster.png"}></ImagePoker>
        </div>
    </BrowserRouter>
)