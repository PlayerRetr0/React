import { useState, useEffect } from "react";
import { getSeries, createSeries, deleteSeries } from "../../services/seriesCliente";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import api from "../../services/api";

function Series() {
  const [series, setSeries] = useState([])
  const [seriesApi, setSeriesApi] = useState([])
  const [loading, setLoading] = useState(true)
  const [seriesInput, setSeriesInput] = useState("")
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleFavorite = (id) => {
    setSeries(
      series.map((item) =>
        item.id === id ? { ...item, favorite: !item.favorite } : item
      )
    );
  };

  useEffect(() => {
    if(searchTerm == ""){
        setSeries(seriesApi)
        return
    }
    const filteredItems = seriesApi.filter((series) =>
      series.titulo.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSeries([...filteredItems]);
  }, [searchTerm]);

  const fetchData = async () => {
    setLoading(true)
    
    try {
      const dados = await getSeries();
      setSeries(dados);
      setSeriesApi(dados);
      console.log(dados);
    } catch (err) {
      console.log(err);
    }

    setLoading(false)
  };
  const criarSeries = async () =>{
    try{
        const response = await createSeries({
            titulo : seriesInput,
            descricao : "descricao 1",
            status : "status 1",
            prioridade : "prioridade 1"   
        })
        setSeries([...series, response])
        setSeriesInput("")
    } catch {
        console.log(e)
    }

  }


  const excluirSeries = async (id) =>{
    try{
        const response = await deleteSeries(id)
        setSeries(series.filter( item => item.id != response.id ))
    } catch {
        console.log('ocorreu um erro')
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Series</h1>
      <div style={{marginBottom: "20px"}}>
        <label>
          <input type="text" value={searchTerm} onChange={handleSearch} placeholder="pesquisar"/> <br />
            <input type="text" value={seriesInput} onChange={(e) => setSeriesInput(e.target.value)} placeholder="adicionar"/>
        </label>
      </div>
          {loading && <h2>CARREGANDO...</h2>}
        <ul>
          <button onClick={criarSeries}>add Series</button>
        {series.map((item) => (
          <li key={item.id}>
            {item.titulo}
            <button onClick={() => handleFavorite(item.id)}>
              {item.favorite ? <AiFillStar /> : <AiOutlineStar />}
            </button>
            <button style={{margin: "10px"}} onClick={() => excluirSeries(item.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Series;