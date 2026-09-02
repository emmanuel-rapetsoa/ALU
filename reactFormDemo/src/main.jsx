import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './Login.jsx' 
import './Login.css'
import './ProfileSelector.jsx'
import './ProfileSelector.css'
import ProfileSelector from './ProfileSelector.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Login/>
  </StrictMode>,
)
