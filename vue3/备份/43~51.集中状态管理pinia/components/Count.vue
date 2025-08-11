<template>
  <div class="Count">
    <h2>当前求和为{{ countStore.sum }}</h2>
    <h2>学校：{{ countStore.school }}，地址：{{ countStore.address }}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">加</button>
    <button @click="minus">减</button>
  </div>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'
import { useCountStore } from '@/store/count'
import { storeToRefs } from 'pinia'
// 数据
// const sum = ref(1)
const countStore = useCountStore()
const { sum, school, address } = storeToRefs(countStore)
const n = ref(1)

function add() {
  // 第一种修改方法
  countStore.sum += n.value

  // 第二种修改方式，批量修改
  countStore.$patch({
    sum: 444,
    school: 'aaa',
    address: 'bbb'
  })

  // 第三种修改方法，action中可以有一定的逻辑
  countStore.increment(n.value)
}

function minus() {
  countStore.sum -= n.value
}
</script>
<style lang="scss" scoped>
.Count {
  background-color: skyblue;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}

select,
button {
  margin: 0 5px;
  height: 25px;
}
</style>
