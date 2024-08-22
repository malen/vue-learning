<template>
  <div class="Person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>地址：{{ address }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">展示电话号码</button>
  </div>
</template>

<script setup lang="ts" name="Person123">
// 总结
// 1.vue2中，写在data(){}中的变量自动变成响应式的，可以直接在模板中使用。
// 2.vue3中，写在setup()中的变量需要使用ref()包裹，才能变成响应式的。

import { ref } from "vue";

let name = ref("John Doe");
let age = ref(30);
let tel = "123-456-7890";
let address = "123 Main St";

// 方法
function changeName() {
  name.value = "张三";
}
function changeAge() {
  age.value += 1;
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