import './App.css'
import { useState } from 'react'
import Tarefa from './componests/Tarefa'


const tarefasMock = [
  { id: 0, tarefa: 'Tarefa 1'}, 
  { id: 1, tarefa: 'Tarefa 2'}, 
  { id: 2, tarefa: 'Tarefa 3'}
]

function App() {
  const[tarefa, setTarefa] = useState("")
  const [tarefas, setTarefas] = useState(tarefasMock)
  const [count, setCount] = useState(3)


  function addTarefa(){
    if(tarefa != ""){

      //let tmp = tarefas
      //tmp.push(tarefa)
      //setTarefas(tmp)

      setTarefas([...tarefas, {id: count, tarefa: tarefa}])
      setCount(count + 1)
      setTarefa("")
    } else{
    console.log("digite uma tarefa valida")
    }

  }
  function excluirTarefa(id){
    setTarefas(tarefas.filter(item => item.id != id ))
  }

  return (
    <>
    <h1>Lista de tarefas de </h1>
    <div style ={{marginBottom:25}}>
      <input type="text" placeholder='Insira sua tarefa' onChange={(e) => setTarefa(e.target.value)} value={tarefa} />
    </div>
    <button onClick={addTarefa}>Adicionar Tarefa</button>

    {tarefas.map((tarefa, index) =>{
      return <Tarefa key={tarefa.id} tarefa={tarefa} excluir={excluirTarefa}/>
    })}
    <hr />
    </>
  )
}



export default App
