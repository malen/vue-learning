<template>
  <div class="AtguiguInput">
    <input type="text" :value="modelValue" @input="emit('update:modelValue', (<HTMLInputElement>$event.target).value)">
  </div>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'
defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
</script>
<style lang="scss" scoped>
input {
  border: 2px solid black;
  background-image: linear-gradient(45deg, red, yellow, green);
  height: 30px;
  font-size: 20px;
  color: white;
}
</style>
