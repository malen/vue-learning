<template>
  <ul class="news-list">
    <li>编号：{{ id }}</li>
    <li>标题：{{ title }}</li>
    <li>内容：{{ content }}</li>
  </ul>
</template>
<script lang="ts" setup name="Detail">
import { reactive, watch, computed, ref } from 'vue'
defineProps(['id', 'title', 'content'])
</script>
<style lang="scss" scoped>
.news-list {
  list-style: none;
  padding-left: 20px;
}

.news-list>li {
  line-height: 30px;
}
</style>
