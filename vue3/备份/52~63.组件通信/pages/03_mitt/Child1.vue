<template>
  <div class="Child1">
    <h3>子组件1</h3>
    <h4>玩具：{{ toy }}</h4>
    <button @click="emitter.emit('send-toy', toy)">玩具给弟弟</button>
  </div>
</template>

<script lang="ts" setup>
import emitter from '@/utils/emitter';
import { reactive, watch, computed, ref, onMounted } from 'vue'
// 数据
const toy = ref('奥特曼')

</script>
<style lang="scss" scoped>
.Child1 {
  margin-top: 10px;
  background-color: rgb(76, 209, 76);
  padding: 10px;
  box-shadow: 0 0 10px black;
  border-radius: 10px;
}
</style>
