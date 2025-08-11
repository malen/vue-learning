<template>
  <div class="Father">
    <h3>父组件</h3>
    <!--给Child绑定事件-->
    <Child @send-toy="getToy" />
  </div>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'
import Child from './Child.vue';

function getToy(value: string) {
  console.log('getToy', value);

}

</script>
<style lang="scss" scoped>
.Father {
  background-color: rgb(165, 164, 164);
  padding: 20px;
  border-radius: 10px;
}
</style>
