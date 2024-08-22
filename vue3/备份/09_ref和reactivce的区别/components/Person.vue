<template>
  <div class="Person">
    <h2>一辆{{ car.brand }}， 价格{{ car.price }}万</h2>
    <button @click="changeBrand">修改汽车的品牌</button>
    <button @click="changePrice">修改汽车的价格</button>
    <button @click="changeCar">修改汽车</button>

    <ul>
      <li v-for="game in games" :key="game.id">{{ game.name }}</li>
    </ul>
    <button @click="changeGameName">修改第一个游戏的名字</button>
  </div>
</template>

<script setup lang="ts" name="Person">
// 总结
// 1.ref用来定义：基本类型数据，对象类型数据；
// 2.reactive用来定义：对象类型数据
// 区别：
// 1.ref创建的变脸必须使用.value（可以使用Vue official插件自动添加.value）
// 2.reactive重新分配一个新对象，就会失去响应式（可以使用Object.assign去整体替换）
// 使用原则：
// 1.若需要一个基本类型的响应式数据，必须用ref；
// 2.若需要一个对象类型的响应式数据，层级不深，ref和reactive都可以；
// 3.若需要一个对象类型的响应式数据，层级较深，建议用reactive；

import { ref, reactive } from 'vue'
// 数据
let car = reactive({ brand: 'BMW', price: 100 })

let games = ref([
  { id: 1, name: 'CSGO' },
  { id: 2, name: 'LOL' },
  { id: 3, name: 'DOTA2' }
])

// 方法
function changeBrand() {
  car.brand = 'Audi'
  console.log('修改后的品牌：', car.brand);
}

function changePrice() {
  car.price += 10
  console.log('修改后的价格：', car.price);

}
function changeCar() {
  // 原来的car的响应式数据被斩断了，页面不会更新
  // car = reactive({ brand: 'Tesla', price: 200 })
  // console.log('修改后的汽车：', car);

  // 正确写法
  Object.assign(car, { brand: 'Tesla', price: 200 })
  console.log('修改后的汽车：', car);
}

function changeGameName() {
  games.value[0].name = 'DOTA3'
  console.log('修改后的游戏名字：', games.value[0].name);
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