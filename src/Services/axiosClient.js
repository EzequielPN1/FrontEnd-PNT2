import axios from 'axios'


const axiosClient = axios.create({
    baseURL: 'https://server-controldegastos.glitch.me/',
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