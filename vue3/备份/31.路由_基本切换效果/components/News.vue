<template>
  <div class="news">
    <ul>
      <li><a href="#">新闻001</a></li>
      <li><a href="#">新闻002</a></li>
      <li><a href="#">新闻003</a></li>
      <li><a href="#">新闻004</a></li>
    </ul>
  </div>
</template>
<script lang="ts" setup name="News">
import { reactive, watch, computed, ref } from 'vue'

</script>
<style lang="scss" scoped>
.news {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  height: 100%;
}

.news ul {
  margin-top: 30xp;
  list-style: none;
}
</style>
