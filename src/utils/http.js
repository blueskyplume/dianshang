import axios from "axios";

const instance = axios.create({
    baseURL: 'https://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000,
})

// 拦截器
//axios请求拦截器
instance.interceptors.request.use(config => {
    return config
}, e => Promise.reject(e))

//axios响应拦截器
instance.interceptors.response.use(res => {
    return res.data
}, e => Promise.reject(e))
export default instance