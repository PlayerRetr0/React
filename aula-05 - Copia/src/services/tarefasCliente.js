import api from "./api"

export const getTarefas = async () => {
    const { data } = await api.get('tarefas')

    return data
}

export const getTarefa = async (id) => {
    // const { data } = await api.get('tarefas/' + id)
    const { data } = await api.get(`tarefas/${id}`)

    return data
}
export const createTarefa = async (dados) => {
    const {data} = await api.post('tarefas', dados)
    return data
}


export const deleteTarefa = async (id) => {
    const { data } = await api.delete('tarefas/'+id)
    return data
}

export const updateTarefa = (id) => {}