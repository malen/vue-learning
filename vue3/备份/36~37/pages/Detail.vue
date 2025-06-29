<template>
  <ul class="news-list">
    <li>编号：{{ route.query.id }}</li>
    <li>标题：{{ route.query.title }}</li>
    <li>内容：{{ route.query.content }}</li>
  </ul>
</template>
<script lang="ts" setup name="Detail">
import { reactive, watch, computed, ref } from 'vue'
// useRoute是一个hooks
import { useRoute } from 'vue-router';
const route = useRoute()
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
