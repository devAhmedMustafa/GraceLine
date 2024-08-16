import axios from "axios";

const server = "http://localhost:4000"
const api = axios.create({
    baseURL: server,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': localStorage.getItem('token')!
    }
});

export default api;