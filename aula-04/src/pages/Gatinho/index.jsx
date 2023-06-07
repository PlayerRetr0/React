import { useState, useEffect } from 'react'
import { FaCat } from "react-icons/fa";
import axios from 'axios'

function Gatinho() {
  const[gatinho, setGatinho] = useState(null)
  const[loading, setLoading] = useState(false)

  const getGatinho = async() => {
    setLoading(true)
   // axios.get('https://api.thecatapi.com/v1/images/search').then(response => console.log(response))
   // console.log("cat")

    const { data } = await axios.get('https://api.thecatapi.com/v1/images/search')
    setGatinho(...data)
    setLoading(false)
  }

    useEffect(() => {getGatinho()},[])

  return (
    <>
    { gatinho != null && 
        <img src={gatinho.url} alt="gatinho" width={600} height={600} />
      }  
    <a onClick={getGatinho}>
        <h1>
        <FaCat className='logo' size={100} color='yellow'/>
        </h1>
    </a>
    <div>
      <button onClick={getGatinho} disabled={loading}>
        ver varios gatos
      </button>
    </div>
    

    </>
  )
}

export default Gatinho
