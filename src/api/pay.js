import instance from "@/utils/http";

// 获取订单
export const getOrderApi = (id) => {
  return instance({
    url: `/member/order/${id}`,
  })
}