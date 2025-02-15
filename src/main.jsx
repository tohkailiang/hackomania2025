// import { StrictMode } from 'react'
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
import RedirectPanel from './components/RedirectPanel.jsx'
// import LinkCard from './components/LinkCard.jsx'
// import LinkCardViewer from './components/LinkCardViewer.jsx'
import RecommendationPage from './components/RecommendationPage.jsx'

const user = new User();

console.log(user);

const linkCards = [
  {
    imagePath: './sprites/results/honeybee.png',
    description: 'First Link Card',
    link: 'https://www.google.com'
  },
  {
    imagePath: './sprites/results/elephant.png',
    description: 'Second Link Card',
    link: 'https://www.youtube.com'
  },
  {
    imagePath: './sprites/results/axolotl.png',
    description: 'Third Link Card',
    link: 'https://www.google.com'
  }
];

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
      <Route path="/" element={
          <LandingPage 
            logo="./sprites/pengwing.png" 
            title="Pengwing" 
            description="A personality quiz for fowl-lovers" 
          />
        } />
        {/* <Route path="/" element={<LinkCardViewer linkCards={linkCards} description="ching chong!" />} /> */}
        <Route path="/quiz" element={
          <>
            <div>
              <GamePanel interactions={interactions}/>
            </div>
            <div style={{marginTop: 'auto', paddingBottom: '0px'}}>
              <QuizPanel quizbank="./data/quizbank.json" user={user} />
            </div>
          </>
        } />
        <Route path="/interactions" element={<InteractionsPanel interactions={interactions} />} />
        <Route path="/results" element={<ResultsPanel result={result} />} />
        <Route path="/redirect" element={<RedirectPanel />} />
        <Route path="/recommendations" element={
          <RecommendationPage 
            topic="animals"
            title="Hi {name}, since you liked {topic}, here are some recommendations for you."
          />
        } />
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
