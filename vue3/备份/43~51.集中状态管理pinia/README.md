## 43.对Pinia的理解
需要多个组件共享的数据，交给集中式状态管理。

## 44.准备一个效果

## 45.搭配pinia环境
pnpm add pinia
### 在main.ts中配置
```ts
import { createPinia } from 'pinia'
const pinia = createPinia()
app.use(pinia)
```

## 46.存储+读取数据
### 存储数据
```ts
// 跟组件名对应
import { defineStore } from "pinia"

// 两个参数。
// 1.ID跟文件名对应
// 2.配置对象，state必须为函数
export const useCountStore = defineStore('count', {
  state() {
    return {
      sum: 6
    }
  },
})
```
### 读取数据
```ts
<template>
  <h2>当前求和为{{ countStore.sum }}</h2>
</template>
<script lang="ts" setup>
import { useCountStore } from '@/store/count'

const countStore = useCountStore()
</script>
```

## 47.修改数据（三种方式）
```ts
function add() {
  // 第一种修改方法，直接改
  countStore.sum += n.value

  // 第二种修改方式，批量修改
  countStore.$patch({
    sum: 444,
    school: 'aaa',
    address: 'bbb'
  })

  // 第三种修改方法，action中可以有一定的逻辑
  countStore.increment(n.value)
}
```
### 第三种方法，的count.ts实现
```ts
// 跟组件名对应
import { defineStore } from "pinia"

// 两个参数。
// 1.ID跟文件名对应
// 2.配置对象，state必须为函数
export const useCountStore = defineStore('count', {
  // 放置方法，用于响应组件中的动作
  actions: {
    increment(value: number) {
      this.sum += value
    }
  },
  state() {
    return {
      sum: 6,
      school: '尚硅谷',
      address: '北京'
    }
  },
})
```

## 48.storeToRefs
```html
    <h2>当前求和为{{ countStore.sum }}</h2>
    <h2>学校：{{ countStore.school }}，地址：{{ countStore.address }}</h2>
```
用了pinia，模版中插值显示数据的时候，会显的很啰嗦。可以用storeToRefs解构。
注意：不要使用ToRefs，因为它会对数据和方法都包裹ref 变成响应式的。而storeToRefs比较轻量，只关注数据。
```ts
const { sum, school, address } = storeToRefs(countStore)
```

## 49.getters
类似于vue中的计算属性，可以给store加个性化的数据
```ts
export const useCountStore = defineStore('count', {
  // 放置方法，用于响应组件中的动作
  actions: {
    increment(value: number) {
      this.sum += value
    }
  },
  state() {
    return {
      sum: 6,
      school: '尚硅谷',
      address: '北京'
    }
  },
  getters: {
    bigSum: state => state.sum * 3,
    upperSchool(): string {
      return this.school.toUpperCase()
    }
  }
})
```

## 50.subscribe
store里保存的数据发生变化时，被调用。跟watch很像

## 51.store的组合式
```ts
export const userTalkStore = defineStore('talk', () => {
  const talkList = reactive(
    JSON.parse(localStorage.getItem('talkList') as string) || []
  )

  async function getATalk() {
    let { data: { content: title } } = await axios.get('xxxx')
    let obj = { id: nanoid(), title }

    talkList.unshift(obj)
  }

  return { talkList, getATalk }
})
```