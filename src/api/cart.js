import instance from "@/utils/http";

// 加入购物车
export const insertCartApi = ({ skuId, count }) => {
    return instance({
        url: '/member/cart',
        method: 'post',
        data: {
            skuId,
            count
        }
    })
}

// 获取购物车列表
export const findNewCartListApi = () => {
    return instance({
        url: '/member/cart',
    })
}

// 删除购物车商品
export const deleteCartApi = (ids) => {
    return instance({
        url: '/member/cart/',
        method: 'delete',
        data: {
            ids
        }
    })
}

// 合并购物车
export const mergeCartApi =  (data) => {
    return instance({
        url: '/member/cart/merge',
        method: 'post',
        data
    })
}