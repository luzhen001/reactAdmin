import requestAxios from './request.js';
import { BASE_URL } from '../config/index.js'
//登录
export const reqLogin = (username, password) => {
    return requestAxios.get(`${BASE_URL}/login.json`, { username, password })
}