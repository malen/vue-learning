<template>
  <div class="Game">
    <h2>游戏列表</h2>
    <slot :games="games"></slot>
  </div>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'
const games = reactive([
  { id: 'aaaaa1', name: '英雄联盟' },
  { id: 'aaaaa2', name: '王者农药' },
  { id: 'aaaaa3', name: '红色警戒' },
  { id: 'aaaaa4', name: '斗罗大陆' },
])

</script>
<style lang="scss" scoped>
.Game {
  background-color: skyblue;
  border-radius: 10px;
  box-shadow: 0 0 10px;
  padding: 10px;
  width: 200px;
  height: 300px;
}

h2 {
  background-color: orange;
  text-align: center;
  font-size: 18px;
  font-weight: 800;
  padding: 10px 0 10px 0;
}
</style>
