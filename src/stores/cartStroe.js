import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { useUserStore } from "./user";
import { insertCartApi, findNewCartListApi,deleteCartApi } from "@/api/cart";

export const useCartStore = defineStore("cart", () => {
    const userStore = useUserStore();
    const isLogin = computed(() => userStore.user.token);
    // 1.定义store - cartList
    const cartList = ref([]);
    // 2.定义action - addCart
    const addCart = async (goods) => {
        const { skuId, count } = goods;
        if (isLogin.value) {
            // 登录后购物车逻辑
            await insertCartApi({ skuId, count });
            updateNewCartList();
        } else {
            // 本地购物车逻辑
            // 添加购物车操作
            const item = cartList.value.find((item) => item.skuId === goods.skuId);
            if (item) {
                item.count += goods.count;
            } else {
                cartList.value.push(goods)
            }
        }

    }

    const updateNewCartList = async () => {
        console.log('获取新购物车列表');
        
        const res = await findNewCartListApi();
        cartList.value = res.result;
    }
    // 3.定义删除对应skuID的商品
    const delCart = async (skuId) => {
        if (isLogin.value) {
            await deleteCartApi([skuId]);
            updateNewCartList();
        } else {
            cartList.value = cartList.value.filter((item) => item.skuId !== skuId);
        }
    }

    // 4.数据汇总
    const allCount = computed(() => cartList.value.reduce((p, c) => p + c.count, 0));
    const selectedCount = computed(() => cartList.value.filter((item) => item.selected).reduce((p, c) => p + c.count, 0));
    const allPrice = computed(() => cartList.value.reduce((p, c) => p + c.count * c.price, 0));
    const selectedPrice = computed(() => cartList.value.filter((item) => item.selected).reduce((p, c) => p + c.count * c.price, 0));

    // 5.单选功能
    const singleCheck = (i, selected) => {
        const item = cartList.value.find((item) => item.skuId === i.skuId);
        item.selected = selected;
    }

    // 全选功能
    const allCheck = (selected) => {
        cartList.value.forEach((item) => item.selected = selected)
    }

    // 退出登录时清除购物车
    const clearCart = () => {
        cartList.value = [];
        console.log("清除购物车");
        
    }

    

    // 6.是否全选
    const isAll = computed(() => cartList.value.every((item) => item.selected));

    return {
        cartList,
        isAll,
        allCount,
        selectedCount,
        allPrice,
        selectedPrice,
        addCart,
        delCart,
        singleCheck,
        allCheck,
        clearCart,
        updateNewCartList
    }
}, {
    persist: true
})