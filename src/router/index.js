import { createRouter, createWebHistory } from 'vue-router'
import LoginIndex from '@/views/Login/LoginIndex.vue'
import LayoutIndex from '@/views/Layout/LayoutIndex.vue'
import SubCategoryIndex from '@/views/SubCategory/SubCategoryIndex.vue'
import DetailIndex from '@/views/Details/DetailIndex.vue'
import CartListIndex from '@/views/CartList/CartListIndex.vue'
import CheckoutIndex from '@/views/Checkout/CheckoutIndex.vue'
import PayIndex from '@/views/Pay/PayIndex.vue'
import PayBack from '@/views/Pay/PayBack.vue'
import MemBerIndex from '@/views/Member/MemBerIndex.vue'
import UserInfo from '@/views/Member/components/UserInfo.vue'
import UserOrder from '@/views/Member/components/UserOrder.vue'

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
        },
        {
          path: 'cart',
          component: CartListIndex
        },
        {
          path: 'checkout',
          component: CheckoutIndex
        },
        {
          path: 'pay',
          component: PayIndex
        },
        {
          path: 'paycallback',
          component: PayBack
        },
        {
          path: 'member',
          component: MemBerIndex,
          children: [
            {
              path: '',
              component: UserInfo
            },
            {
              path: 'order',
              component: UserOrder
            }
          ]
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
