<template>
  <div class="Child">
    <h2>子组件</h2>
    <h4>a: {{ a }}</h4>
    <h4>其他：{{ $attrs }}</h4>
    <GrandChild v-bind="$attrs" />
  </div>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'
import GrandChild from './GrandChild.vue';

defineProps(['a'])
</script>
<style lang="scss" scoped>
.Child {
  margin-top: 10px;
  background-color: skyblue;
  padding: 10px;
  box-shadow: 0 0 10px black;
  border-radius: 10px;
}
</style>
