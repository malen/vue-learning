<template>
  <div class="Father">
    <h2>父组件</h2>
    <h4>银子：{{ money }}万元</h4>
    <h4>车子：一辆{{ car.brand }}车，价值{{ car.price }}万元</h4>
    <Child />
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref, provide } from 'vue'
import Child from './Child.vue';

let money = ref(100)
let car = reactive({
  brand: '奔驰',
  price: 100
})

function updateMoney(value: number) {
  money.value += value
}
// 向后代提供数据
// TODO:这里的money不能.value，否则接收放拿到的是值，不是响应式对象。这里的money是对象的简写形式，实际上是 money:money
provide('qian', { money, updateMoney })
provide('che', car)
</script>
<style lang="scss" scoped>
.Father {
  background-color: rgb(165, 164, 164);
  padding: 20px;
  border-radius: 10px;
}
</style>
