import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:50346',
    //baseURL: 'https://mostafa-50b685b9.localhost.run',
})
export default api

export const addHeader = function() {
}