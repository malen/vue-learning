<script lang="ts" setup name="App">
import Person from "./components/Person.vue"
import { ref, onBeforeMount, onMounted } from 'vue'
let isShow = ref(true)

function unmountPerson() {
  isShow.value = false
}

// 挂载
onBeforeMount(() => {
  // 最先执行
  console.log('父组件--挂载前');

})
onMounted(() => {
  // 等子组件挂载完毕，再执行父组件挂载完毕
  console.log('父组件--挂载完毕');
})
</script>

<template>
  <Person v-if="isShow" />
  <button @click="unmountPerson">点我卸载Person组件</button>
</template>
