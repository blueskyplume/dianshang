<script setup>
import { onMounted,ref } from 'vue';
import LayoutNav from './LayoutNav.vue'
import LayoutHeader from './LayoutHeader.vue'
import LayoutFooter from './LayoutFooter.vue'
import LayoutFixed from './LayoutFixed.vue';
import { useCategoryStore } from '@/stores/category';

const categoryStore = useCategoryStore();

let navIndex = ref(null);
const changeNavIndex = (index) => {
  console.log('收到子组件的通知',index);
  navIndex.value = index;
}


onMounted(()=>{
  categoryStore.getCategoryList();
})
</script>

<template>
  <LayoutFixed :navIndex="navIndex" @change-index="changeNavIndex"/>
  <LayoutNav />
  <LayoutHeader :navIndex="navIndex" @change-index="changeNavIndex"/>
  <RouterView />
  <LayoutFooter />
</template>