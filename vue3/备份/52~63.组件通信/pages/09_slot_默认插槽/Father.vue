<template>
  <div class="Father">
    <h3>父组件（默认插槽）</h3>
    <div class="content">
      <category title="热门游戏列表">
        <ul>
          <li v-for="g in games" :key="g.id">{{ g.name }}</li>
        </ul>
      </category>
      <category title="今日美食城市">
        <img :src="imageUrl" alt="">
      </category>
      <category title="今日影视推荐">
        <video :src="videoUrl" controls></video>
      </category>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'
import Category from './Category.vue';

const games = reactive([
  { id: 'aaaaa1', name: '英雄联盟' },
  { id: 'aaaaa2', name: '王者农药' },
  { id: 'aaaaa3', name: '红色警戒' },
  { id: 'aaaaa4', name: '斗罗大陆' },
])

const imageUrl = ref('https://www.tsinghua.edu.cn/images/20210605.jpg')
const videoUrl = ref('https://v.cic.tsinghua.edu.cn/vod/video/f/9/588779.mp4')
</script>
<style lang="scss" scoped>
.Father {
  background-color: rgb(165, 164, 162);
  padding: 20px;
  border-radius: 10px;
}

.content {
  display: flex; // 推荐
  justify-content: space-evenly;
}

img,
video {
  width: 100%;
}
</style>
