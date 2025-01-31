import { createApp } from 'vue' // 创建APP实例的函数
import App from './App.vue'
import './index.css'
import {createWebHashHistory, createRouter} from
 'vue-router'
import Xue from './components/Xue.vue'
import Xue2 from './components/Xue2.vue'

const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        {path: '/', component: Xue},
        {path: '/xxx', component: Xue2}
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
