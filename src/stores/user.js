import { defineStore } from 'pinia';
import { ref } from 'vue';
import { LoginApi } from '@/api/user';
import { useCartStore } from './cartStroe';
import { mergeCartApi } from '@/api/cart';


export const useUserStore = defineStore('user', () => {
    const user = ref({});
    const cartStore = useCartStore();
    // 登录
    const getUserInfo = async ({account, password}) => {
        if(user.id) return;
        const res = await LoginApi({account, password});
        user.value = res.result;
        // 合并购物车的操作
        await mergeCartApi(cartStore.cartList.map(item => {
            return {
                skuId: item.skuId,
                selected: item.selected,
                count: item.count
            }
        }));

        cartStore.updateNewCartList();
    }

    // 登出
    const logout = () => {
        console.log("登出");
        user.value = {};
        cartStore.clearCart();
    }

    return {
        user,
        getUserInfo,
        logout
    }
},{
    persist: true
})