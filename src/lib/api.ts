import axios from 'axios'

const api = axios.create({
    //baseURL: 'http://localhost:50346',
    baseURL: 'https://mostafa-8c849e11.localhost.run',
})
export default api

export const addHeader = function() {
}