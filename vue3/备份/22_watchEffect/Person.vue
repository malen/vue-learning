<template>
  <div class="Person">
    <h3>需求：当水温达到40度，或水位达到40cm的时候，给服务器发请求。</h3>
    <h2>当前水温：{{ temp }}摄氏度</h2>
    <h2>当前水位：{{ height2 }}cm</h2>
    <button @click="changeTemp">水温+10</button>
    <button @click="changeHeight">水位+10</button>
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
import { ref, watch, watchEffect } from 'vue'
// 数据
let temp = ref(10)
let height2 = ref(10)

// 方法
function changeTemp() {
  temp.value += 10
}
function changeHeight() {
  height2.value += 10
}

// 监视 - watch实现
// watch([temp, height], (value) => {
//   // 从value中获取最新的水温（newTemp）和最新的水位（newHeight）
//   let [newTemp, newHeight] = value
//   console.log(newTemp, newHeight);
//   if (newTemp >= 60 || newHeight >= 80) {
//     console.log("发送请求");
//   }
// })
// 监视 - watchEffect实现：不需要指明要监视谁，会自动跟踪
watchEffect(() => {
  console.log("aaa");

  // TODO: 如果是temp先到达40，则height2停止监控
  if (temp.value >= 40 || height2.value >= 40) {
    console.log("发送请求");
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
