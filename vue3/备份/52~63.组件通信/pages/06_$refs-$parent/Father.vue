<template>
  <div class="Father">
    <h3>父组件</h3>
    <h4>房产：{{ house }}</h4>
    <button @click="changeToy">修改Child1的玩具</button>
    <button @click="changeComputer">修改Child2的电脑</button>
    <button @click="getAllChild($refs)">让所有孩子的书变多</button>
    <Child1 ref="c1" />
    <Child2 ref="c2" />
  </div>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'
import Child1 from './Child1.vue'
import Child2 from './Child2.vue'

// 数据
const house = ref(4)

// 给组件打标识
const c1 = ref()
const c2 = ref()
// 方法
function changeToy() {
  c1.value.toy = "小猪佩奇"
}

function changeComputer() {
  c2.value.computer = "华为"
}

function getAllChild(refs: any) {
  for (const key in refs) {
    refs[key].book += 3
  }
}

// 向外部提供数据
defineExpose({ house })
</script>
<style lang="scss" scoped>
.Father {
  background-color: rgb(165, 164, 164);
  padding: 20px;
  border-radius: 10px;
}
</style>
