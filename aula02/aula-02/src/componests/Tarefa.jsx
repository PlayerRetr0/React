
function Tarefa({tarefa, excluir}){
    return(
        <div style={{backgroundColor: "white", color: "black", display: "flex", justifyContent: "space-between", marginTop: 30, padding: 15, borderRadius: 10, width: 300}}>
            <h4>{tarefa.id} - {tarefa.tarefa}</h4>
            <button onClick={() => excluir(tarefa.id)}>Excluir</button>
        </div>
    )
}

export default Tarefa