import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles.css'

import Contact from './components/Contact.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Contact/>
    
  </StrictMode>,
)
