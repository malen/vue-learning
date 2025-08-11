<template>
  <div class="LoveTalk">
    <button @click="getLoveTalk">获取一句土味情话</button>
    <ul>
      <li v-for="talk in talkStore.talkList" :key="talk.id">{{ talk.title }}</li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'
import axios from "axios";
// 分别暴露
import { nanoid } from "nanoid";

import { useTalkStore } from '@/store/loveTalk'

const talkStore = useTalkStore()

const talkList = reactive([
  { id: 'xxdafasf01', title: '今天你有点怪，哪里怪？怪好看的！' },
  { id: 'xxdafasf02', title: '草莓，蓝莓，蔓越莓，今天想我了没？' },
  { id: 'xxdafasf03', title: '心里给你留了一块地，我的死心塌地。' },
])

async function getLoveTalk() {
  // 从返回结果解构出 data.content 并重新命名为title，触发title的简写形式
  const { data: { content: title } } = await axios.get('/api/qinghua?format=json')
  const obj = {
    id: nanoid(),
    title,
  }
  talkList.unshift(obj)
}
</script>
<style lang="scss" scoped>
.LoveTalk {
  background-color: orange;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
</style>
