import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

// createApp 可以看作花盆，App是花的根，其他的组件是花的枝叶，mount把花盆放到指定位置上。
createApp(App).mount('#app')
