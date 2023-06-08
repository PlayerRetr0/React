import axios from "axios";

const api = axios.create({
    baseURL: 'https://6480fc99f061e6ec4d4a23a6.mockapi.io/aula05'
})

export default api