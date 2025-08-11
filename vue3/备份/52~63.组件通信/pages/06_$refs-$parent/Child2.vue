<template>
  <div class="Child2">
    <h3>子组件2</h3>
    <h4>电脑：{{ computer }}</h4>
    <h4>书籍：{{ book }} 本</h4>
  </div>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'

const computer = ref('戴尔')
const book = ref(6)

// 把数据交给外部，否则外部无法通过该组件的实例更改值
defineExpose({ computer, book })
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
