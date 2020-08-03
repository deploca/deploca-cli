import axios from 'axios'

const api = axios.create({
    //baseURL: 'http://localhost:50346',
    baseURL: 'https://api.deploca.com',
})
export default api

export const addHeader = function() {
}