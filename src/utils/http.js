import axios from "axios";
import { ElMessage } from 'element-plus';
import 'element-plus/theme-chalk/el-message.css';

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
    return res.data;
}, e => {
    // 统一错误提示
    ElMessage({
        type: 'warning',
        message: e.response.data.message || '请求失败'
    });
    return Promise.reject(e);
})
export default instance