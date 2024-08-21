<script lang="ts">
import Person from "./components/Person.vue"
export default {
  name: "App",
  components: { Person } // 注册组件
}
</script>

<template>
  <div class="app">
    <h1>你好啊</h1>
    <Person />
  </div>
</template>

<style scoped>
.app {
  background-color: #ddd;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
