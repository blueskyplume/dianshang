import './assets/main.css'

import { createApp } from 'vue'
import pinia from './stores'

import App from './App.vue'
import router from './router'

// 引入初始化样式
import '@/styles/common.scss'

// 引入懒加载指令并注册
import { lazyPlugin } from '@/directives'


const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(lazyPlugin)

app.mount('#app')


