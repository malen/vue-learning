<template>
  <div class="outer">
    <h2>我是App组件</h2>
    <img src="https://www.tsinghua.edu.cn/images/20210605.jpg">
    <br>
    <Modal />
  </div>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'
import Modal from './Modal.vue';

</script>
<style lang="scss" scoped>
.outer {
  background-color: #ddd;
  border-radius: 10px;
  padding: 5px;
  box-shadow: 0 0 10px;
  width: 400px;
  height: 400px;
  filter: saturate(20%) // 设置饱和度
}

img {
  width: 180px;
}
</style>
