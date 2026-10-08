import {Routes, Route, Link} from 'react-router-dom'
import Home from './components/Home'
import Sobre from './components/Sobre'
import './App.css'


function App() {
  return (
    <div>
      <nav>
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/sobre">Sobre</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sobre' element={<Sobre />} />
      </Routes>
    </div>
  )
}

export default App