<template>
  <div class="Child">
    <h3>子组件</h3>
    <h4>玩具：{{ toy }}</h4>
    <h4>父给的车：{{ che }}</h4>
    <button @click="sendToy(toy)">把玩具给父亲</button>
  </div>
</template>

<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'
// 数据
const toy = ref('奥特曼')
// 声明接收props
defineProps(['che', 'sendToy'])
</script>
<style lang="scss" scoped>
.Child {
  background-color: skyblue;
  padding: 10px;
  box-shadow: 0 0 10px black;
  border-radius: 10px;
}
</style>
