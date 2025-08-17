<template>
  <div class="Person">
    <h3>情况5:监视上述情况1～4的多个数据</h3>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <h2>汽车：{{ person.car.c1 }}, {{ person.car.c2 }}</h2>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changeC1">修改第一台车</button>
    <button @click="changeC2">修改第二台车</button>
    <button @click="changeCar">修改整个汽车</button>
  </div>
</template>

<script setup lang="ts" name="Person">
// 总结
// watch 可以监视下面四种数据：
// 1.ref定义的数据
// 2.reactive定义的数据
// 3.函数返回一个值
// 4.一个包含上述内容的数组

// computed 不能代替watch的理由：
// computed 的主要功能是从响应式数据派生出新的值，这些值是纯计算得出的。它不适合用于处理副作用，例如发起异步请求，手动更新DOM，或者执行逻辑上的副作用操作。

// 什么是副作用：
// 副作用指的是除了函数本身的返回值之外，还会影响到外部状态或者系统行为的操作。简单来说，就是一个函数在执行时做了除返回结果以外的其他事情，这些事情称为副作用。
import { reactive, watch } from 'vue'
// 数据
let person = reactive({
  name: '张三',
  age: 20,
  car: {
    c1: "宝马",
    c2: "奔驰"
  }
})

// 方法
function changeName() {
  person.name += "~"
}
function changeAge() {
  person.age += 1
}
function changeC1() {
  person.car.c1 = "奥迪"
}
function changeC2() {
  person.car.c2 = "大众"
}
function changeCar() {
  person.car = { c1: "雅迪", c2: "爱玛" }
}

// 情况5:监视上述情况1～4的多个数据
//
watch([() => person.name, () => person.car.c1], (newVal, oldVal) => {
  console.log("person.name或者person.car.c1发生变化", newVal, oldVal);
}, { deep: true })

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
