import axios from 'axios';
import qs from 'querystring';
import { message } from 'antd';
import store from '../redux/store'
import { createDeleteUserInfoAction } from '../redux/creators/login_action';

const instance = axios.create({
    timeout: 5000
})
instance.interceptors.request.use((config) => {
    const { token } = store.getState().userInfo;
    if (token) {
        config.headers.authToken = 'xxx' + token;
    }
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
        if (error.response.status === 401) {
            message.error('身份校验失败，请重新登录！');
            store.dispatch(createDeleteUserInfoAction())
        } else {
            message.error(error.message);
        }
        return new Promise(() => { })
    }
)
export default instance;