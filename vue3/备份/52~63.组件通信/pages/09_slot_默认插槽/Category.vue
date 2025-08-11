<template>
  <div class="Category">
    <h2>{{ title }}</h2>
    <slot>默认内容</slot>
  </div>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'
defineProps(['title'])

</script>
<style lang="scss" scoped>
.Category {
  background-color: skyblue;
  border-radius: 10px;
  box-shadow: 0 0 10px;
  padding: 10px;
  width: 200px;
  height: 300px;
}

h2 {
  background-color: orange;
  text-align: center;
  font-size: 18px;
  font-weight: 800;
  padding: 10px 0 10px 0;
}
</style>
