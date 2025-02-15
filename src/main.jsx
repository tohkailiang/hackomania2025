import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AnswersGroup from './components/AnswersGroup.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <AnswersGroup jsonUrl="./data.json"/>
  </StrictMode>,
)
