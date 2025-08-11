<template>
  <div class="Person">
    {{ a }}
    <ul><!--不加：key的话，默认使用的是索引值，数据更新的时候容易错乱-->
      <li v-for="person in list" :key="person.id">{{ person.name }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="Person">
import type { IPersons } from '@/types';
import { defineProps, withDefaults } from 'vue' // defineProps 是宏函数，可以不引入，类似的还有definaExpose

// 从父组件接收a。注意：这里必须用数组，哪怕只接收一个属性。
// defineProps(['a'])

// 从父组件接收a，同时将props保存起来。x是响应式的。
// let x = defineProps(['a', 'list']) // 如果lsit不做类型限制，父组件即使传过来一个数字，子组件也会执行，输出诡异结果
// console.log(x.a)

// 从父组件接收list，并做类型限制
// defineProps<{ list: IPersons }>()

// 从父组件接收list，并限制类型，限制必要性，指定默认值
withDefaults(defineProps<{ list?: IPersons, a: string }>(), {
  list: () => [
    { id: '2', name: '李四', age: 20 },
  ]
})

</script>
<style scoped>
.Person {
  background-color: skyblue;
  color: black;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

button {
  margin: 0 5px;
}
</style>
