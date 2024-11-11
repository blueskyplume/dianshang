import axios from "axios";
import { ElMessage } from 'element-plus';
import 'element-plus/theme-chalk/el-message.css';
import { useUserStore } from "@/stores/user";
import router from '@/router';

const instance = axios.create({
    baseURL: 'https://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000,
})

// 拦截器
//axios请求拦截器
instance.interceptors.request.use(config => {
    const { user } = useUserStore();
    if(user?.token) {
        config.headers.Authorization = `Bearer ${user.token}`;
    }
    return config
}, e => Promise.reject(e))

//axios响应拦截器
instance.interceptors.response.use(res => {
    return res.data;
}, e => {
    const { logout } = useUserStore();

    // 统一错误提示
    ElMessage({
        type: 'warning',
        message: e.response.data.message || '请求失败'
    });

    // 401token失效处理
    // 1.清楚登录信息
    // 2.跳转到登录页
    if(e.response.status === 401) {
        logout();
        router.push('/login');
    }

    return Promise.reject(e);
})
export default instance