<template>
  <div class="Child">
    <h3>子组件</h3>
    <h4>玩具：{{ toy }}</h4>
    <button @click="emit('send-toy', toy)">测试</button>
  </div>
</template>

<script lang="ts" setup>
import { reactive, watch, computed, ref, onMounted } from 'vue'
// 数据
const toy = ref('奥特曼')
// 声明事件
const emit = defineEmits(['send-toy'])

onMounted(() => {
  setTimeout(() => {
    emit('send-toy')
  }, 3000);
})

</script>
<style lang="scss" scoped>
.Child {
  margin-top: 10px;
  background-color: rgb(76, 209, 76);
  padding: 10px;
  box-shadow: 0 0 10px black;
  border-radius: 10px;
}
</style>
