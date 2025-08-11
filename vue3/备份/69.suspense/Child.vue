<template>
  <div class="Child">
    <h2>我是Child组件</h2>
    {{ sum }}
  </div>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'
import axios from 'axios'

const sum = ref(0)

// OK
axios.get("/api/qinghua?format=json").then((result) => {
  console.log(result);
})

// NG 异步组件会出警告，并且控件不可见。解决方法是使用该组件时，用suspense组件包裹它
// [Vue warn]: Component <Anonymous>: setup function returned a promise, but no <Suspense> 
const { data: { content } } = await axios.get("/api/qinghua?format=json")
console.log(content);

</script>
<style lang="scss" scoped>
.Child {
  background-color: skyblue;
  border-radius: 10px;
  padding: 5px;
  box-shadow: 0 0 10px;
}
</style>
