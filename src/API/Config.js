import Axios from 'axios';

export default Axios.create({
    baseURL: 'https://api.openaq.org/v1/latest',
    params: {
        country: 'FR',
        limit: 1000,
        parameter: 'pm25',
    }
})