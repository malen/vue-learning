<template>
  <div class="Person">
    <h3>标签的ref属性</h3>
    <h4>中国</h4>
    <h5 id="title">北京</h5>
    <h5 ref="title">上海</h5>
    <button @click="showLog">点我输出h5这个元素</button>
  </div>
</template>

<script setup lang="ts" name="Person">
import { ref } from 'vue'
// 总结：
// 1.可以用在普通html标签，也可以用在组件标签上。
// 2.普通html标签的ref属性可以获取到标签的dom元素，但是组件标签的ref属性只能获取到组件的实例对象。
// 3.除非子组件 通过defineExpose暴露出去，让父组件可以访问到。
// TODO: 注意：如果给组件标签也加上ref标签，则通过它可以获得组件的实例对象，由于组件的保护机制，拿不到组件具体的响应式数据的值。
let title = ref()

function showLog() {
  // TODO: 这样写比较危险，有可能调用父组件的元素。解决方法是用ref标签
  // console.log(document.querySelector('#title'));
  console.log(title.value);
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
