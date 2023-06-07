import { useState, useEffect } from 'react'
import axios from 'axios'

function Gatinhos() {
  const[gatinho, setGatinho] = useState(null)
  const[loading, setLoading] = useState(false)

  const getGatinho = async() => {
    setLoading(true)
   // axios.get('https://api.thecatapi.com/v1/images/search').then(response => console.log(response))
   // console.log("cat")

    const { data } = await axios.get('https://api.thecatapi.com/v1/images/search?limit=10')
    setGatinho(data)
    setLoading(false)
  }

    useEffect(() => {getGatinho()},[])

  return (
    <>
    { gatinho != null && gatinho.map(g => {return <img src={g.url} alt="gatinho" width={300} height={300} /> })}
       
    <div>
      <button onClick={getGatinho} disabled={loading}>
        ver varios gatos
      </button>
    </div>
    

    </>
  )
}

export default Gatinhos