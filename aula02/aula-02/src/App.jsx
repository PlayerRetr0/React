import './App.css'
import { useState } from 'react'

function App() {
  const[tarefa, setTarefa] = useState("")
  const[tarefas, setTarefas] = useState([])
  let msg = ""


  function addTarefa(){
    if(tarefa != ""){

      //let tmp = tarefas
      //tmp.push(tarefa)
      //setTarefas(tmp)

      setTarefas([...tarefas, tarefa])

      console.log(tarefa)
      setTarefa("")
    } else{
     msg = <h4>digite uma tarefa valida</h4>
    }

  }

  return (
    <>
    <h1>Lista de tarefas de </h1>
    <div style ={{marginBottom:25}}>
      <input type="text" placeholder='Insira sua tarefa' onChange={(e) => setTarefa(e.target.value)} value={tarefa} />
    </div>
    <button onClick={addTarefa}>Adicionar Tarefa</button>

    {tarefas.map((tarefa, index) =>{
      return <h4 key={tarefa = index}>{tarefa}</h4>
    })}
    <h1>{msg}</h1>
    <hr />
    </>
  )
}



export default App
