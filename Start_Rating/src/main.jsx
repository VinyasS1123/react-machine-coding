import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import StarRating from './StarRaring.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StarRating />
  </StrictMode>,
)
