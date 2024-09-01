<script lang="ts" setup name="App">
import Person from "./components/Person.vue"
</script>

<template>
  <h5 id="title">子组件Person如果直接筛选title这个ID，会拿到此标签元素。</h5>
  <Person />
</template>
