<template>
  <div class="Person">
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="add">点我+1</button>
    <hr>
    <img v-for="(dog, index) in dogList" :key="index" :src="dog" /><br>
    <button @click="getDog">再来一只小狗</button>
  </div>
</template>

<script setup lang="ts" name="Person">
// 总结：
// hooks：让同一个功能的数据和方法组合在一起。
// 将下面的代码拆分到useDog和useSum中。
// import { reactive, ref } from 'vue'
// import axios from 'axios'

// // 数据
// let sum = ref(0)
// let dogList = reactive([
//   'https://images.dog.ceo/breeds/pembroke/n02113023_827.jpg'
// ])

// function add() {
//   sum.value += 1
// }
// async function getDog() {
//   try {
//     let result = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
//     dogList.push(result.data.message)
//   } catch (error) {
//     alert(error)
//   }

// }

// 最后引入创建的useDog和useSum
import useSum from '@/hooks/useSum'
import useDog from '@/hooks/usedog'

const { sum, add } = useSum()
const { dogList, getDog } = useDog()
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

img {
  height: 100px;
  margin-right: 10px;
}
</style>
