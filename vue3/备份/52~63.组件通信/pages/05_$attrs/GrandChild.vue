<template>
  <div class="GrandChild">
    <h2>孙组件</h2>
    <h4>a: {{ a }}</h4>
    <h4>b: {{ b }}</h4>
    <h4>c: {{ c }}</h4>
    <h4>d: {{ d }}</h4>
    <h4>x: {{ x }}</h4>
    <h4>y: {{ y }}</h4>
    <button @click="updateA(6)">点我将爷爷那的a更新</button>
  </div>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'
defineProps(['a', 'b', 'c', 'd', 'x', 'y', 'updateA'])
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
