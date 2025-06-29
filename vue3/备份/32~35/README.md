## 32.两个注意点
1. 路由组件通常存放在pages或者views文件夹，一般组件通常存放在components文件夹。
2. 通过点击导航，视觉效果上“消失”了的组件，默认是被卸载掉的，需要的时候再去挂载。

## 33.路由器工作模式
1. history模式
优点：URL更加美观，不带有#，更接近传统的网站URL
缺点：后期项目上线，需要服务器端配合处理路径问题，否则刷新会有404错误。
const router = createRouter({
    history: createWebHistory(),
})

### nginx中添加下面配置，解决刷新404问题
try_files $uri $uri/ /index.html;

2. hash模式
优点：兼容性更好，因为不需要服务器端处理路径。
缺点：URL带有#，不美观。且在SEO优化方面相对较差。
const router = createRouter({
    history: createWebHashHistory(),
})

## 34.to的两种写法
1. to的字符串写法
<rout-link active-class="active" to="/home">主页</router-link>

2. to的对象写法
<rout-link active-class="active" :to="{path: '/home'}">主页</router-link>

## 35.命令路由
routes = [
    {
        name:'zhuye',
        path: '/home',
        component: Home,
    }
]

### 路由跳转
<rout-link active-class="active" :to="{name: 'zhuye'}">主页</router-link>