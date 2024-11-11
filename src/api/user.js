import instance from "@/utils/http";

export const LoginApi = ({account,password}) => {
    return instance({
        url: '/login',
        method: 'post',
        data: {
            account,
            password
        }
    })
}

export const getLikeListApi = ({ limit = 4 }) => {
    return instance({
      url:'/goods/relevant',
      params: {
        limit 
      }
    })
  }