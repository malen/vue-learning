<template>
  <button @click="showModal">展示弹窗</button>
  <teleport to="body">
    <div class="Modal" v-show="isShow">
      <h2>我是弹窗的标题</h2>
      <p>我是弹窗的内容</p>
      <button @click="closeModal">关闭弹窗</button>
    </div>
  </teleport>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'
const isShow = ref(false)

function showModal() {
  isShow.value = true
}

function closeModal() {
  isShow.value = false
}
</script>
<style lang="scss" scoped>
.Modal {
  width: 200px;
  height: 160px;
  background-color: skyblue;
  border-radius: 10px;
  padding: 5px;
  box-shadow: 0 0 5px;
  text-align: center;
  position: fixed; // 参考视口进行定位。注意：一旦给页面加了滤镜，这个就可能会失效
  left: 50%;
  top: 20px;
  margin-left: -100px;
}
</style>
