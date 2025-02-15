import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import LandingPage from './components/LandingPage.jsx'
import QuizPanel from './components/QuizPanel.jsx'
import GamePanel from './components/GamePanel.jsx'
import User from './data/User.js'
import ResultsPanel from './components/ResultsPanel';
import Result from './data/Result';

const user = new User();

const result = new Result()
.setAffinities(["2342", "234324"])
.setLogo("logos")
.setQuotes(["quotes2", "quotes4"])
.setReviews(["review2", "review22"])
.setTitle("title")
.setTraits(["trait2", "trait4"]);

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
        <Route path="/results" element={<ResultsPanel result={result} />} />
      </Routes>
    </div>
  </BrowserRouter>
)