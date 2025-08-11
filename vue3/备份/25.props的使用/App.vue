<script lang="ts" setup name="App">
import Person from "./components/Person.vue"
import { reactive } from "vue";
import { type IPersons } from '@/types'

let personList = reactive<IPersons>([
  { id: '1', name: '张三', age: 18 },
  { id: '2', name: '李四', age: 20 },
  { id: '3', name: '王五', age: 22 },
])
</script>

<template>
  <Person a="哈哈" :list="personList" />
</template>
