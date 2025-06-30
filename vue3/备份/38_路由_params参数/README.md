## 路由传参
配置路由
    {
      path: '/news',
      component: News,
      children: [
        {
          name: 'xiangxi',
          path: 'detail/:id/:title/:content?', // 占位符后面可以加？，表示可传可不传
          component: Detail,
        }
      ]
    },
### params参数
1. 传递参数

<!--跳转并携带params参数（to的字符串写法）-->
<router-link :to="/news/detail/001/新闻001/内容001">跳转</router-link>

<!--跳转并携带params参数（to的对象写法）-->
<router-link :to="{
    name: 'xiangxi',// 这里必须用name跳转，否则报错，路由找不到
    params: {
        id: news.id,
        title: news.title,
        content: news.content
    }}"> {{news.title}} </router-link>

2. 接收参数
import {useRoute} from 'vue-router'
const route = useRoute()
console.log(route.params.id)

### 两个注意点：
1. 传递params参数时，若使用to的对象写法，必须使用name配置项，不能用path
2. 传递params参数时，需要提前在规则中占位。
