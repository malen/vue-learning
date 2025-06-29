<template>
  <div class="Person">
    <h3>需求：当水温达到60度，或水位达到80cm的时候，给服务器发请求。</h3>
    <h2>当前水温：{{ temp }}摄氏度</h2>
    <h2>当前水位：{{ height2 }}cm</h2>
    <button @click="changeTemp">水温+10</button>
    <button @click="changeHeight">水位+10</button>
  </div>
</template>

<script setup lang="ts" name="Person">
// 总结
// watchEffect立即运行一个函数，同时响应式地追踪其依赖，并在依赖更改时重新执行该函数。
// watch和watchEffect对比
// 1. 都能监听响应式数据的变化，不同的是监听数据变化的方式不同
// 2. watch：需要明确指出监视的数据
// 3. watchEffect：不用明确指出监视的数据（函数中用到哪些属性，那就监视哪些属性）
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

  // TODO: 如果是temp先到达60，则height2停止监控
  if (temp.value >= 60 || height2.value >= 80) {
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
