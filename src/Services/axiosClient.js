import axios from 'axios'


const axiosClient = axios.create({
    baseURL: 'http://localhost:1988',
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