<template>
  <div class="Person">
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="add">点我+1</button>
  </div>
</template>

<script setup lang="ts" name="Person">
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

let sum = ref(0)

function add() {
  sum.value += 1
}

// Vue3中的生命周期
// 创建：此处的setup即是创建
console.log('创建');
// 挂载
onBeforeMount(() => {
  console.log('挂载前');

})
onMounted(() => {
  console.log('挂载完毕');
})
// 更新
onBeforeUpdate(() => {
  console.log('更新前');

})
onUpdated(() => {
  console.log('更新完毕');
})
// 卸载
onBeforeUnmount(() => {
  console.log('卸载前');

})
onUnmounted(() => {
  console.log('卸载完毕');
})
</script>
<style scoped>
.Person {
  background-color: skyblue;
  color: black;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

button {
  margin: 0 5px;
}
</style>
