<template>
  <div class="App">
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="person.age += 1">修改年龄</button>
    <hr>
    <h2>{{ car }}</h2>
    <button @click="car.price += 10">点我价格+10</button>

    <h2>{{ car2 }}</h2>
    <button @click="car2.price += 10">点我价格+10</button>
  </div>
</template>
<script lang="ts" setup>
import { markRaw, reactive, toRaw } from 'vue'

const person = reactive({
  name: 'tony',
  age: 18
})

const person2 = toRaw(person)
console.log('响应式数据', person);
console.log('原始数据', person2);


const car = markRaw({
  brand: '奔驰',
  price: 100
})
// 这样car2 即使被reactive包装过了，也不是响应式的了。
const car2 = reactive(car)
</script>
<style lang="scss" scoped>
.App {
  background-color: #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px;
  padding: 10px;
}
</style>
