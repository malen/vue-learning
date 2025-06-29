import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// createApp 可以看作花盆，App是花的根，其他的组件是花的枝叶，mount把花盆放到指定位置上。

// 创建一个应用
const app = createApp(App)
// 使用路由器
app.use(router)

// 挂载整个应用到app容器中
app.mount('#app')
