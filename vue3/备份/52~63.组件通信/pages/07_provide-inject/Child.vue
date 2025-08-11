<template>
  <div class="Child">
    <h2>子组件，我不会被打扰</h2>
    <GrandChild />
  </div>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'
import GrandChild from './GrandChild.vue';

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
