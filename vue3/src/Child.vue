<template>
  <div class="Child">
    <h2>我是Child组件{{ x }}</h2>
    {{ sum }}
    <hello />
    <h4 v-beauty="sum">好开心</h4>
  </div>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'

const sum = ref(0)

</script>
<style lang="scss" scoped>
.Child {
  background-color: skyblue;
  border-radius: 10px;
  padding: 5px;
  box-shadow: 0 0 10px;
}
</style>
