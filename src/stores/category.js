import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getCategoryApi } from '@/api/layout'



export const useCategoryStore = defineStore('category', () => {
    const categoryList = ref([]);

    const getCategoryList = () => {
        if (categoryList.value.length === 0) {
            getCategoryAction()
            console.log('数据不存在')
        }else{
            console.log('数据存在')
        }
        return categoryList.value;
    }

    const getCategoryAction = async () => {
        const res = await getCategoryApi()
        categoryList.value = res.result
    }

    return {
        categoryList,
        getCategoryList
    }
},{
    persist: true
})