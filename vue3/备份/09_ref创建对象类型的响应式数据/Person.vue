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
import { ref } from 'vue'
// 数据，ref 定义对象类型
let car = ref({ brand: 'BMW', price: 100 })

// ref可以包裹数组
let games = ref([
  { id: 1, name: 'CSGO' },
  { id: 2, name: 'LOL' },
  { id: 3, name: 'DOTA2' }
])

// ref包裹的对象，响应式是深层次的
let obj = ref({
  a: { b: { c: 1 } }
})

// 方法
function changePrice() {
  car.value.price += 10
  console.log('修改后的价格：', car.value.price);

}

function changeGameName() {
  games.value[0].name = 'DOTA3'
  console.log('修改后的游戏名字：', games.value[0].name);
}

function test() {           // 测试深层次属性
  obj.value.a.b.c = 2
  console.log('测试深层次属性：', obj.value.a.b.c);
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

li {
  font-size: 20px;
}
</style>