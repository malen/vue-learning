// 创建一个路由器，并暴露出去
// 引入createRouter
import { createRouter, createWebHistory } from "vue-router";

// 引入可能要呈现的组件
import Home from '@/pages/Home.vue'
import News from '@/pages/News.vue'
import About from '@/pages/About.vue'
import Detail from '@/pages/Detail.vue'

// 创建路由器
const router = createRouter({
  history: createWebHistory(),// 路由的工作模式
  routes: [
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/news',
      component: News,
      children: [
        {
          name: 'xiangxi',
          path: 'detail/:id/:title/:content?', // 占位符后面可以加？，表示可传可不传
          component: Detail,
          props: true,
        }
      ]
    },
    {
      path: '/about',
      component: About,
    },
  ]
})

// 暴露出去router
export default router