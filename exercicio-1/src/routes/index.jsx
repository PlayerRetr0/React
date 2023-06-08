import {Routes, Route} from 'react-router-dom'
import Series from '../pages/series'


function Rotas() {
    return(
        <Routes>
            <Route path='/' element={<Series />} />

            <Route path="*" element={<h1>404 - Page Not Found!</h1>} />
        </Routes>
    )
}

export default Rotas