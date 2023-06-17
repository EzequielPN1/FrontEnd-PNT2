import axios from 'axios'


const axiosClient = axios.create({
    baseURL: 'https://serverControlgastos.glitch.me/',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
       
    }
})

export default {
    getApiClient() {
        return axiosClient;
    }
}