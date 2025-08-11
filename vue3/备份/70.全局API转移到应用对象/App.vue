<template>
  <div class="App">
    <h2>我是App组件{{ x }}</h2>
    <Child />
    <hello />
  </div>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'
import Child from './Child.vue';

</script>
<style lang="scss" scoped>
.App {
  background-color: #ddd;
  border-radius: 10px;
  padding: 5px;
  box-shadow: 0 0 10px;
}

img {
  width: 180px;
}
</style>
