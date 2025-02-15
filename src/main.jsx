import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TestRender from './pixie/TestRender.jsx'
import GamePanel from './components/GamePanel.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GamePanel />
    <App />
  </StrictMode>,
)
