import { createRouter, createWebHistory } from 'vue-router'
import LoginIndex from '@/views/Login/LoginIndex.vue'
import LayoutIndex from '@/views/Layout/LayoutIndex.vue'
import SubCategoryIndex from '@/views/SubCategory/SubCategoryIndex.vue'
import DetailIndex from '@/views/Details/DetailIndex.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: LayoutIndex,
      children: [
        {
          path: '',
          component: () => import('@/views/Home/HomeIndex.vue')
        },
        {
          path: 'category/:id',
          component: () => import('@/views/Category/CategoryIndex.vue')
        },
        {
          path: 'category/sub/:id',
          component: SubCategoryIndex
        },
        {
          path: 'detail/:id',
          component: DetailIndex
        }
      ]
    },
    {
      path: '/login',
      component: LoginIndex,
    }
  ],
  // 路由滚动行为定制
  scrollBehavior() {
    return {
      top: 0
    }
  }
})

export default router
