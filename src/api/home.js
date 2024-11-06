import instance from "@/utils/http";

// 获取banner
export function getBannerApi() {
  return instance({
    url: "/home/banner",
  })
}

/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export const findNewApi = () => {
    return instance({
      url:'/home/new'
    })
  }