import { useState, useEffect } from "react";
import { getTarefas, getTarefa, createTarefa, deleteTarefa } from "../../services/tarefasCliente";
import api from "../../services/api";

function Tarefas() {
  const [tarefas, setTarefas] = useState([])
  const [loading, setLoading] = useState(true)
  const [tarefaInput, setTarefaInput] = useState("")


  const fetchData = async () => {
    setLoading(true)
    
    try {
      const dados = await getTarefas();
      setTarefas(dados);
      console.log(dados);
    } catch (err) {
      console.log(err);
    }

    setLoading(false)
  };
  const criarTarefa = async () =>{
    try{
        const response = await createTarefa({
            titulo : tarefaInput,
            descricao : "descricao 1",
            status : "status 1",
            prioridade : "prioridade 1"   
        })
        setTarefas([...tarefas, response])
        setTarefaInput("")
    } catch {
        console.log(e)
    }

  }
  const excluirTarefa = async (id) =>{
    try{
        const response = await deleteTarefa(id)
        setTarefas(tarefas.filter( item=> item.id != response.id ))
    } catch {
        console.log('ocorreu um erro')
    }
  }

  const getTarefaByID = async () => {
    try {
      const dados = await getTarefa(2);
      console.log(dados);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>TAREFAS</h1>
      <div style={{marginBottom: "20px"}}>
        <label>
            <input type="text" value={tarefaInput} onChange={(e) => setTarefaInput(e.target.value)} onKeyDown={(e) => (e.code === 'Enter')}/>
        </label>
      </div>
        <button onClick={criarTarefa}>add tarefa</button>
      {loading && <h2>CARREGANDO...</h2>}
      {tarefas.map((item) => (
        <>
        <li key={item.id}>{item.titulo}</li>
        <button onClick={() => excluirTarefa(item.id)}>Excluir</button>
        </>
      ))}
    </>
  );
}

export default Tarefas;