import axios from 'axios'


const axiosClient = axios.create({
    baseURL: 'https://server-controlgastos.glitch.me/',
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