
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
// ✅ 引入 Bootstrap 样式
// import 'bootstrap/dist/css/bootstrap.min.css'
// 创建一个应用
const app = createApp(App)

// 挂载整个应用到app容器中
app.mount('#app')
