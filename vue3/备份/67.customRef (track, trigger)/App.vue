<template>
  <div class="App">
    <h2>{{ msg }}</h2>
    <input type="text" v-model="msg">
  </div>
</template>
<script lang="ts" setup>
import { ref, customRef } from 'vue'
import useMsgRef from './useMsgRef';

// 使用vue提供的默认ref定义的响应式数据，数据一边，页面就更新
// const msg = ref('你好')

// TODO: 最佳实践：封装成hooks
const { msg } = useMsgRef('你好', 1000)
// // 使用vue提供的customRef定义响应式数据
// let initValue = '你好customRef'
// let timer: number
// const msg = customRef((track, trigger) => {
//   return {
//     get() {
//       track() // 告诉vue数据msg很重要，要对msg进行持续关注，一旦msg变化就去更新
//       return initValue
//     },
//     set(value) {
//       clearTimeout(timer)
//       timer = setTimeout(() => {
//         initValue = value
//         trigger() // 通知vue，数据msg变化了
//       }, 1000)

//     },
//   }
// })

</script>
<style lang="scss" scoped>
.App {
  background-color: #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px;
  padding: 10px;
}
</style>
