
import { createApp } from 'vue'
import App from './App.vue'
import Hello from './Hello.vue'
// ✅ 引入 Bootstrap 样式
// import 'bootstrap/dist/css/bootstrap.min.css'
// 创建一个应用
const app = createApp(App)

// 注册全局组件
app.component('hello', Hello)

// 不建议过多使用
app.config.globalProperties.x = 9
// 让引用全局属性x的地方，能够正确识别类型
declare module 'vue' {
  interface ComponentCustomProperties {
    x: number
  }
}

// 注册全局指令
app.directive('beauty', (element, { value }) => {
  element.innerText += value
  element.style.color = 'green'
  element.style.backgroundColor = 'yellow'
})

// 挂载整个应用到app容器中
app.mount('#app')

setTimeout(() => {
  app.unmount()
}, 2000);
