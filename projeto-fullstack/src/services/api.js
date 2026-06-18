import axios from "axios";

const api = axios.create({
    baseURL: 'https://localhost:8000/',
    timeout: 5000,
    headers: { 'X-Custom-Header': 'foobar'}

});

export default api;