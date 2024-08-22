<template>
  <div class="Person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">展示电话号码</button>
  </div>
</template>

<!-- <script setup lang="ts">
 // 下面的写法相当于：setup() {let a = 666; return {a};}
let a = 666
</script> -->


<script setup lang="ts">
// 总结
// 1.默认组件名就是文件名，可以省略。
// 2.如果想改变组件名，可以再写一个script标签，然后在里面写export default {name: 'xxx'}。
// 3.或者使用开发用插件vite-plugin-vue-setup-extend，然后就可以再script标签里写name= 'xxx'。

// TODO:注意：此时的name,age,tel都不是响应式的，需要使用 ref() 包裹
let name = "John Doe";
let age = 30;
let tel = "123-456-7890";

// 方法
function changeName() {
  name = "张三"; // TODO: 这里的name不是响应式的，需要使用 ref() 包裹
}
function changeAge() {
  age += 1 // TODO: 这里的age不是响应式的，需要使用 ref() 包裹
}
function showTel() {
  alert(tel)
}

</script>
<style scoped>
.Person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

button {
  margin: 0 5px;
}
</style>