<template>
  <div class="Father">
    <h3>父组件</h3>
    <Child1 />
    <Child2 />
  </div>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'
import Child1 from './Child1.vue';
import Child2 from './Child2.vue';



</script>
<style lang="scss" scoped>
.Father {
  background-color: rgb(165, 164, 164);
  padding: 20px;
  border-radius: 10px;
}
</style>
