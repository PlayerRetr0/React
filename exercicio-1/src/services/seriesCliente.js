import api from "./api"

export const getSeries = async () => {
    const { data } = await api.get('tarefas')

    return data
}

export const getSerie = async (id) => {
    // const { data } = await api.get('tarefas/' + id)
    const { data } = await api.get(`tarefas/${id}`)

    return data
}
export const createSeries = async (dados) => {
    const {data} = await api.post('tarefas', dados)
    return data
}


export const deleteSeries = async (id) => {
    const { data } = await api.delete('tarefas/'+id)
    return data
}

export const updateSeries = (id) => {}