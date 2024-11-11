import instance from "@/utils/http";

// 获取用户订单
export const getUserOrderApi = (params) => {
    return instance({
      url:'/member/order',
      method:'GET',
      params,
      timeout: 20000
    })
  }