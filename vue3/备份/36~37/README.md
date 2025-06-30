## 路由传参

### query参数
1. 传递参数

<!--跳转并携带query参数（to的字符串写法）-->
<router-link to="/news/detail?a=1&b=2">跳转</router-link>

<!--跳转并携带query参数（to的对象写法）-->
<router-link :to="{
    path: '/news/detail',
    query: {
        id: news.id,
        title: news.title,
        content: news.content
    }}"> {{news.title}} </router-link>

2. 接收参数
import {useRoute} from 'vue-router'
const route = useRoute()
console.log(route.query.a)
