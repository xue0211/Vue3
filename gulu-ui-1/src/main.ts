import { createApp } from 'vue' // 创建APP实例的函数
import App from './App.vue'
import './index.s   css'
import {createWebHashHistory, createRouter} from
 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'

const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        {path: '/', component: Home},
        {path: '/doc', component: Doc}
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
