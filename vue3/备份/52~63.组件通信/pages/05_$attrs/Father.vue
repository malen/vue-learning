<template>
  <div class="Father">
    <h2>父组件</h2>
    <h4>a: {{ a }}</h4>
    <h4>b: {{ b }}</h4>
    <h4>c: {{ c }}</h4>
    <h4>d: {{ d }}</h4>
    <Child :a="a" :b="b" :c="c" :d="d" v-bind="{ x: 100, y: 200 }" :updateA="updateA" />
  </div>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'
import Child from './Child.vue';

const a = ref(1)
const b = ref(2)
const c = ref(3)
const d = ref(4)

function updateA(value: number) {
  a.value += value
}
</script>
<style lang="scss" scoped>
.Father {
  background-color: rgb(165, 164, 164);
  padding: 20px;
  border-radius: 10px;
}
</style>
