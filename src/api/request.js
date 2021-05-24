import axios from 'axios';
import qs from 'querystring';
import { message } from 'antd';

const instance = axios.create({
    timeout: 5000
})
instance.interceptors.request.use((config) => {
    const { method, data } = config;
    if (method.toLowerCase() === 'post') {
        if (data instanceof Object) {
            config.data = qs.stringify(data);
        }
    }
    return config;
});
instance.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        message.error(error.message);
        return new Promise(() => { })
    }
)
export default instance;