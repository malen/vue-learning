<template>
  <div class="GrandChild">
    <h2>孙组件</h2>
    <h4>银子：{{ money }}万元</h4>
    <h4>车子：一辆{{ y?.brand }}车，价值{{ y?.price }}万元</h4>
    <button @click="updateMoney(6)">增加爷爷的钱</button>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref, inject } from 'vue'

// 提供默认值，让其可以正确识别解构类型
let { money, updateMoney } = inject('qian', { money: 0, updateMoney: (x: number) => { } })
let y = inject<Car>('che')

interface Car {
  brand: string
  price: number
}

</script>
<style lang="scss" scoped>
.GrandChild {
  margin-top: 10px;
  background-color: orange;
  padding: 10px;
  box-shadow: 0 0 10px black;
  border-radius: 10px;
}
</style>
