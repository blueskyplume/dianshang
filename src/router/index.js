import { createRouter, createWebHistory } from 'vue-router'
import LoginIndex from '@/views/Login/LoginIndex.vue'
import LayoutIndex from '@/views/Layout/LayoutIndex.vue'

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
          path: 'category',
          component: () => import('@/views/Category/CategoryIndex.vue')
        }
      ]
    },
    {
      path: '/login',
      component: LoginIndex,
    }
  ]
})

export default router
