import { useState } from 'react'
import '../App.css'
import sus from '../componests/sus.jpg'

const nome = "malucas"
let idade = 100

function Contado(){
  const [contador, setContador] = useState(0)
  function Contador(){
      setContador(contador + 1)
  }
  
    return (
      <>
        <h1>ola, {nome}</h1>
        <h2>vc tem {idade} anos</h2>
  
        <h3>quantidade de viruz no seu computador: <br></br><span style={{fontSize:90}}>{contador}</span></h3>
        <a onClick={Contador}>
        <img src={sus} alt="" className='logo' />
        </a>
      </>
    )

}


export default Contado