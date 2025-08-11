<template>
  <div class="Father">
    <h3>父组件</h3>
    <h4>汽车：{{ car }}</h4>
    <h4 v-if="toy">子给的玩具：{{ toy }}</h4>
    <Child :che="car" :sendToy="getToy" />
  </div>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'
import Child from './Child.vue';

// 数据
const car = ref('奔驰')
const toy = ref('')
// 方法：用于得到儿子的玩具
function getToy(value: string) {
  console.log('父', value);
  toy.value = value
}
</script>
<style lang="scss" scoped>
.Father {
  background-color: rgb(165, 164, 164);
  padding: 20px;
  border-radius: 10px;
}
</style>
