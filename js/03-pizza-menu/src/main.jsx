import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Header } from './Header'
import { Footer } from './Footer'
import { Menu } from './Menu'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='container'>
      <Header />
      <Menu />
      <Footer />
    </div>
  </StrictMode>,
)