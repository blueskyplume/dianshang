// 封装Banner数据业务代码
import { ref, onMounted } from 'vue';
import { getBannerApi } from '@/api/home';

export function useBanner() {
    const bannerList = ref([]);
    const getBanner = async () => {
        const res = await getBannerApi({
            distributionSite: '2'
        });
        console.log(res.result);
        bannerList.value = res.result;

    }

    onMounted(() => {
        getBanner()
    })

    return {
        bannerList,
    }
}