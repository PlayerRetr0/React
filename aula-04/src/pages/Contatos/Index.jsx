import { useNavigate } from "react-router-dom"

function Contatos(){

    const navigate = useNavigate()
    const enviar = () =>{
        navigate('/')
    }
    return(
        <><h1>Contatos</h1>
        <button onClick={enviar}>Enviar</button>
        </>
    )
}

export default Contatos