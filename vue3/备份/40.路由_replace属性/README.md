## replace属性
作用：控制路由跳转时操作浏览器历史记录的模式。
浏览器的历史记录有两种写入方式：分别为push和replace：
1. push是追加历史记录（默认值）
2. replace时替换当前记录

开启replace模式：
```vue
    <div class="navigate">
      <router-link replace to="/home" active-class="active">首页</router-link>
      <router-link replace to="/news" active-class="active">新闻</router-link>
      <router-link replace to="/about" active-class="active">关于</router-link>
    </div>
```