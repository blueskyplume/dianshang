// 封装分类数据业务代码
import { getCategoryApi } from '@/api/category';
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

export function useCategory() {
    const categoryData = ref({});
    const route = useRoute();
    const getCategory = async (id) => {
        const res = await getCategoryApi(id);
        console.log(res.result);
        categoryData.value = res.result;

    }

    watch(route, () => {
        getCategory(route.params.id)
    })

    onMounted(() => {
        getCategory(route.params.id)
    })

    return {
        categoryData
    }
}