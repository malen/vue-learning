<template>
  <div class="Person">
    <h2>姓名：{{ person.name }}，年龄：{{ age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <h2>姓名：{{ aname }}</h2>
    <button @click="changeAName">修改年龄</button>
  </div>
</template>

<script setup lang="ts" name="Person">
// 总结
// 1.toRef和toRefs可以将响应式对象里的数据解构，并且将变量变成响应式的

import { reactive, toRefs, toRef, ref } from 'vue';

// 数据
let person = reactive({ name: '张三', age: 20 });

// 解构赋值，解构出来的变量name，age不是响应式的。
// let { name, age } = person
// console.log(name, age);

let { name, age } = toRefs(person) // ref定义的响应式的变量name，age
console.log(name, age);

// 还有另一个将变量变成响应式的方法：toRef
let nl = toRef(person, 'age') // 变量nl是响应式的，nl.value可以获取到person.age的值
console.log(nl.value);

let person1 = { aname: "11" }
let aname = toRef(person1, 'aname') // TODO: person1没有用reactive包装，所以aname虽然是Ref的，点击changeAName按钮后页面也不会实时更新。


// 方法
function changeName() {
  person.name += "~"
}
function changeAge() {
  person.age += 1
}

function changeAName() {
  aname.value += "1"
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