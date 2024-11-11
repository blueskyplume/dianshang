import instance from "@/utils/http";

// 获取订单详情
export const getCheckInfoApi = () => {
    return instance({
        url: '/member/order/pre',
    })
}

// 创建订单
export const createOrderApi = (data) => {
    return instance({
        url: '/member/order',
        method: 'POST',
        data
    })
}