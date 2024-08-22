<template>
  <div class="Person">
    <h2>一辆{{ car.brand }}， 价格{{ car.price }}万</h2>
    <button @click="changePrice">修改汽车的价格</button>

    <ul>
      <li v-for="game in games" :key="game.id">{{ game.name }}</li>
    </ul>
    <button @click="changeGameName">修改第一个游戏的名字</button>
    <h2>测试深层次属性：{{ obj.a.b.c }}</h2>
    <button @click="test">测试</button>
  </div>
</template>

<script setup lang="ts" name="Person">
// 总结
// 1.vue2中，写在data(){}中的变量自动变成响应式的，可以直接在模板中使用。
// 2.vue3中，写在setup()中的变量需要使用ref()包裹，才能变成响应式的。
import { reactive } from 'vue'
// 数据
let car = reactive({ brand: 'BMW', price: 100 })

let games = reactive([
  { id: 1, name: 'CSGO' },
  { id: 2, name: 'LOL' },
  { id: 3, name: 'DOTA2' }
])

let obj = reactive({
  a: { b: { c: 1 } }
})

// 方法
function changePrice() {
  car.price += 10
  console.log('修改后的价格：', car.price);

}

function changeGameName() {
  games[0].name = 'DOTA3'
  console.log('修改后的游戏名字：', games[0].name);
}

function test() {           // 测试深层次属性
  obj.a.b.c = 2
  console.log('测试深层次属性：', obj.a.b.c);
}

</script>
<style scoped>
.Person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

button {
  margin: 0 5px;
}
</style>