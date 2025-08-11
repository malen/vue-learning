<template>
  <div class="Child2">
    <h3>子组件2</h3>
    <h4>电脑：{{ computer }}</h4>
    <h4>哥哥给的玩具：{{ toy }}</h4>
  </div>
</template>

<script lang="ts" setup>
import emitter from '@/utils/emitter';
import { reactive, watch, computed, ref, onMounted, onUnmounted } from 'vue'
// 数据
const computer = ref('华为')

const toy = ref('')
// 给emitter绑定事件
emitter.on('send-toy', (value) => {
  console.log('send-toy');
  toy.value = value as string
})

onUnmounted(() => {
  emitter.off('send-toy')
})

</script>
<style lang="scss" scoped>
.Child2 {
  margin-top: 10px;
  background-color: rgb(226, 201, 44);
  padding: 10px;
  box-shadow: 0 0 10px black;
  border-radius: 10px;
}
</style>
