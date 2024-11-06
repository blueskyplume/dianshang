import instance from "@/utils/http";

// 获取banner
export function getBannerApi(params={}) {
    const { distributionSite = '1' } = params;
    return instance({
        url: "/home/banner",
        params: {
            distributionSite
        }
    })
}

/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export const findNewApi = () => {
    return instance({
        url: '/home/new'
    })
}

/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export const findHotApi = () => {
    return instance({
        url: '/home/hot'
    })
}

/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export const getGoodsApi = () => {
    return instance({
        url: '/home/goods'
    })
}