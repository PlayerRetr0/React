import { Link } from 'react-router-dom'

function Header(){
    return(
        <div>
        <h1>Header</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/gatinho">Gatinho</Link></li>
                <li><Link to="/sobre">Sobre</Link></li>
                <li><Link to="/contatos">Contados</Link></li>
                <li><Link to="/gatinhos">Gatinhos</Link></li>
            </ul>
        </div>
    )
}

export default Header