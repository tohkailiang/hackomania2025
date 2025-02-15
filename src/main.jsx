import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import LandingPage from './components/LandingPage.jsx'
import QuizPanel from './components/QuizPanel.jsx'
import GamePanel from './components/GamePanel.jsx'
import User from './data/User.js'
import ImagePoker from './pixie/ImagePoker.jsx'
import ResultsPanel from './components/ResultsPanel';
import Result from './data/Result';
import Interactions from './data/Interactions.js'
import InteractionsPanel from './components/InteractionsPanel.jsx'

const user = new User();

const result = new Result()
.setAffinities([
  "./sprites/results/elephant.png",
  "./sprites/results/honeybee.png"
])
.setLogo("./sprites/results/raccoon.png")
.setQuotes(["I need friends...", "But I don't want to leave my bed."])
.setReviews(["So cute!", "Chickens are superior tbh."])
.setTitle("Pengwing")
.setTraits(["Aggressively", "Passive"]);

const interactions = new Interactions();
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <div className="container" style={{position:'relative', zIndex:'1', display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden'}}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/quiz" element={
          <>
            <div>
              <GamePanel interactions={interactions}/>
            </div>
            <div style={{marginTop: 'auto', paddingBottom: '0px'}}>
              <QuizPanel quizbank="./data/quizbank.json" />
            </div>
          </>
        } />
        <Route path="/interactions" element={<InteractionsPanel interactions={interactions} />} />
        <Route path="/results" element={<ResultsPanel result={result} />} />
      </Routes>
    </div>
        <div style={{position:'absolute', bottom: '10px', left: '10px', zIndex:'2'}}>
        <ImagePoker image={"sprites/chicken.png"} interactions={interactions} isWhiteChick={true}></ImagePoker>
        </div>
        <div style={{position:'absolute', bottom: '10px', right: '10px', zIndex:'2'}}>
        <ImagePoker image={"sprites/rooster.png"} interactions={interactions} isWhiteChick={false}></ImagePoker>
        </div>
  </BrowserRouter>
)
