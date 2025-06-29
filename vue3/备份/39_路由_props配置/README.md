## 路由props配置
作用： 让路由组件更方便的收到参数（可以将路由参数作为props传递给组件）
```json
{
    name: 'xiangxi',
    path: 'detail/:id/:title/:content',
    component: Detail,
    // props的布尔写法。作用：将路由收到的所有params参数作为props传递给Detail组件。
    // props:true
    // 接收参数：defineProps(['id', 'title', 'content'])

    // props的函数写法。作用：把收到的对象中每一组key-value作为props传递给Detail组件
    props(route){
        return route.query// 接收参数：defineProps(['id', 'title', 'content'])
    }

    // props的对象写法。作用： 把对象的每一组key-value作为props传递给Detail组件
    // props: {a:1, b:2},
}
```