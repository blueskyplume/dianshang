import { defineStore } from 'pinia';
import { ref } from 'vue';
import { LoginApi } from '@/api/user';


export const useUserStore = defineStore('user', () => {
    const user = ref({});
    const getUserInfo = async ({account, password}) => {
        if(user.id) return;
        const res = await LoginApi({account, password});
        user.value = res.result;
    }
    const logout = () => {
        console.log("登出");
        
        user.value = {};
    }

    return {
        user,
        getUserInfo,
        logout
    }
},{
    persist: true
})