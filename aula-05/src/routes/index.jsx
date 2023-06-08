import {Routes, Route} from 'react-router-dom'
import Tarefas from '../pages/tarefas'


function Rotas() {
    return(
        <Routes>
            <Route path='/tarefas' element={<Tarefas />} />

            <Route path="*" element={<h1>404 - Page Not Found!</h1>} />
        </Routes>
    )
}

export default Rotas