import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import About from './pages/About.jsx'
import Home from './pages/Home'

function App() {

  return (
    <BrowserRouter>

      <header>
        <Link to='/' className='site-logo'>#VANLIFE</Link>
        <nav>
          <Link to='/about'>About</Link>
        </nav>
      </header>

      
      

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>

  </BrowserRouter>
  )
}

export default App
