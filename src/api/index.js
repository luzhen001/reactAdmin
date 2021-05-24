import requestAxios from './request.js';
import { BASE_URL } from '../config/index.js'
//登录
export const Login = (username, passeord) => {
    return requestAxios.post(`${BASE_URL}/login`, { username, passeord })
}