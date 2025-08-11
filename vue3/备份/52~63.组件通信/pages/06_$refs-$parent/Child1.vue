<template>
  <div class="Child1">
    <h3>子组件1</h3>
    <h4>玩具：{{ toy }}</h4>
    <h4>书籍：{{ book }} 本</h4>
    <button @click="minusHouse($parent)">干掉父亲的一套房产</button>
  </div>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'

// 数据
const toy = ref('奥特曼')
const book = ref(3)

// 把数据交给外部，否则外部无法通过该组件的实例更改值
defineExpose({ toy, book })

// 方法
function minusHouse(parent: any) {
  parent.house -= 1
}

// 注意点：当访问obj.c的时候，底层会自动读取value属性，因为c是在obj这个响应对象中的。
// let obj = reactive({
//   a: 1,
//   b: 2,
//   c: ref(3),
// })
// let x = ref(4)

// console.log(obj.a);
// console.log(obj.b);
// console.log(obj.c);
// console.log(x.value);





</script>
<style lang="scss" scoped>
.Child1 {
  margin-top: 10px;
  background-color: rgb(76, 209, 76);
  padding: 10px;
  box-shadow: 0 0 10px black;
  border-radius: 10px;
}
</style>
