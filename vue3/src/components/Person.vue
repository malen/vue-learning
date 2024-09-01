<template>
  <div class="Person">

  </div>
</template>

<script setup lang="ts" name="Person">
import { type IPerson } from '@/types'

let person: IPerson = { id: "1", name: 'John', age: 30 }

</script>
<style scoped>
.Person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

button {
  margin: 0 5px;
}
</style>
