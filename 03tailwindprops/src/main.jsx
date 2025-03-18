import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Card from './components/Card.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Card placeName = "Pyramid" btnName="About"/>
    <Card placeName = "Taj Mahal" btnName="Click here"/>

  </StrictMode>,
)
