import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import QuizPanel from './components/QuizPanel.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QuizPanel quizbank="./data/quizbank.json"/>
  </StrictMode>,
)
