<template>
  <div class="Person">

  </div>
</template>

<script setup lang="ts" name="Person">
import { type IPerson, type IPersons } from '@/types'

// 在 TypeScript（和 JavaScript）中，var 和 let 的区别主要体现在作用域、提升（Hoisting）和重复声明等方面
// var 是函数作用域
// let 是块级作用域
// 推荐总是使用let或者const ，避免使用var。
// 因为后者会引起变量提升和作用域混乱。
let person: IPerson = { id: "1", name: 'John', age: 30 }
let personList: Array<IPerson> = [
  { id: "1", name: 'John', age: 30 },
  { id: "2", name: 'smith', age: 30 }
]

// 这种写法更简洁
let personList2: IPersons = [
  { id: "1", name: 'John', age: 30 },
  { id: "2", name: 'smith', age: 30 }
]

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
