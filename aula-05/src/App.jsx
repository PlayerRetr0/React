import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Rotas from './routes/index'

function App(){
  return(
    <BrowserRouter>
      <Rotas />
    </BrowserRouter>
  )

}

export default App