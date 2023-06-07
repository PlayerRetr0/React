
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import Home from './pages/Home'
import Gatinho from './pages/Gatinho'
import Header from './components/Header'
import Sobre from './pages/Sobre'
import Contatos from './pages/Contatos/Index'
import Gatinhos from './pages/Gatinhos'

function App() {
  return(
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/gatinho' element={<Gatinho />} />
      <Route path='/sobre' element={<Sobre />} />
      <Route path='/contatos' element={<Contatos />} />
      <Route path='/gatinhos' element={<Gatinhos />} />
      <Route path='*' element={<h1>Error 404 - page not found</h1>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
