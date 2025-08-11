
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import emitter from './utils/emitter'
// ✅ 引入 Bootstrap 样式
import 'bootstrap/dist/css/bootstrap.min.css'
// 创建一个应用
const app = createApp(App)

// 创建pinia
const pinia = createPinia()
app.use(pinia)
app.use(router)
// 挂载整个应用到app容器中
app.mount('#app')
