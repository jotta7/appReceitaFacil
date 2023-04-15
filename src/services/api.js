import axios from 'axios'

//rodar com seu ipv4:  json-server --watch -d 180 --host 192.168.15.11 db.json

const api = axios.create({
    baseURL: 'http://192.168.15.11:3000/'
})
export default api;