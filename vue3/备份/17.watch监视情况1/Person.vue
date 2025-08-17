<template>
  <div class="Person">
    <h3>情况1:监视「ref」定义的「基本类型」数据</h3>
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="changeSum">点我sum+1</button>
  </div>
</template>

<script setup lang="ts" name="Person">
// 总结
// watch 可以监视下面四种数据：
// 1.ref定义的数据
// 2.reactive定义的数据
// 3.函数返回一个值（getter函数）
// 4.一个包含上述内容的数组

// computed 不能代替watch的理由：
// computed 的主要功能是从响应式数据派生出新的值，这些值是纯计算得出的。它不适合用于处理副作用，例如发起一步请求，手动更新DOM，或者执行逻辑上的副作用操作。

// 什么是副作用：
// 副作用指的是除了函数本身的返回值之外，还会影响到外部状态或者系统行为的操作。简单来说，就是一个函数在执行时做了除返回结果以外的其他事情，这些事情称为副作用。
import { ref, watch } from 'vue'
// 数据
let sum = ref(0)
// 方法
function changeSum() {
  sum.value += 1
}
// 情况1:监视「ref」定义的「基本类型」数据
const stopWatch = watch(sum, (newVal, oldVal) => {
  console.log('sum changed', newVal, oldVal)
  if (newVal >= 10) {
    // 解除监视
    stopWatch()
  }
})
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
