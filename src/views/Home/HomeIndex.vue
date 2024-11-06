<script setup>
import HomeCategory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeNew from './components/HomeNew.vue'
import HomeHot from './components/HomeHot.vue'
import homeProduct from './components/HomeProduct.vue'

// import HomePanel from './components/HomePanel.vue'
</script>

<template>
    <div class="container">
        <HomeCategory />
        <HomeBanner />
    </div>
    <HomeNew />
    <HomeHot />
    <homeProduct />
    <!-- 测试面板 -->
    <!-- <HomePanel title="热门面板" sub-title="Hot Panel">
        <div class="box">
            Test
        </div>
    </HomePanel>
    <HomePanel title="热门面板1" sub-title="Hot Panel1">
        <div class="box">
            Test2
        </div>
    </HomePanel> -->
</template>

<style scoped></style>