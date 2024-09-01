<template>
  <div class="Person">
    <h3>情况2:监视「ref」定义的「对象类型」数据</h3>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改整个人</button>
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
// computed 的主要功能是从响应式数据派生出新的值，这些值是纯计算得出的。它不适合用于处理副作用，例如发起一步请求，手动更新DOM，或者执行逻辑上的副作用操作。

// 什么是副作用：
// 副作用指的是除了函数本身的返回值之外，还会影响到外部状态或者系统行为的操作。简单来说，就是一个函数在执行时做了除返回结果以外的其他事情，这些事情称为副作用。
import { ref, watch } from 'vue'
// 数据
let person = ref({
  name: '张三',
  age: 20,
})

// 方法
function changeName() {
  person.value.name += "~"
}
function changeAge() {
  person.value.age += 1
}
function changePerson() {
  person.value = { name: '李四', age: 25 }
}

// 监视;情况2:监视「ref」定义的「对象类型」数据，监视的是对象的地址，若想监视对象内部属性的变化，需要手动开启深度监视。
// (添加第三个参数：{deep:true}) 另一个配置项immediate 可以让其在初始化时就开始监视。
//
// TODO:注意点：
// 1.若修改的是ref定义的对象中的属性，newVal和oldVal都是新值，因为它们是同一个对象。
// 2.若修改整个ref定义的对象，newVal是新值，oldVal是旧值，因为不是同一个对象了。
watch(person, (newVal, oldVal) => {
  console.log("person变化了", newVal, oldVal);
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
