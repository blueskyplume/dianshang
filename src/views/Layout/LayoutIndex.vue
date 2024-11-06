<script setup>
import { onMounted } from 'vue';
import LayoutNav from './LayoutNav.vue'
import LayoutHeader from './LayoutHeader.vue'
import LayoutFooter from './LayoutFooter.vue'
import LayoutFixed from './LayoutFixed.vue';
import { useCategoryStore } from '@/stores/category';

const categoryStore = useCategoryStore();
onMounted(()=>{
  categoryStore.getCategoryList();
})
</script>

<template>
  <LayoutFixed />
  <LayoutNav />
  <LayoutHeader />
  <RouterView />
  <LayoutFooter />
</template>