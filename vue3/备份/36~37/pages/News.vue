<template>
  <div class="news">
    <!-- 导航区-->
    <ul>
      <li v-for="news in newsList" :key="news.id">
        <!--query 传参 第一种写法 -->
        <!-- <router-link :to="`/news/detail?id=${news.id}&title=${news.title}&content=${news.content}`">{{ news.title
        }}</router-link> -->


        <!--query 传参 第二种写法 -->
        <router-link :to="{ path: '/news/detail', query: { id: news.id, title: news.title, content: news.content } }">{{
          news.title
        }}</router-link>
      </li>
    </ul>
    <!-- 展示区 -->
    <div class=" news-content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script lang="ts" setup name="News">
import { reactive, watch, computed, ref } from 'vue'

const newsList = reactive([
  { id: '01', title: '一种食物', content: '西兰花' },
  { id: '02', title: '一种水果', content: '水蜜桃' },
  { id: '03', title: '一种文具', content: '圆珠笔' },
  { id: '04', title: '一种动物', content: '小熊猫' },
])

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
