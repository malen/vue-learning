<template>
  <div class="Person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">展示电话号码</button>
  </div>
</template>
<script lang="ts">
// 总结
// 1.Vue2的选项式语法可以和setup共存
// 2.旧写法可以读出setup中的变量，但是setup不能读取旧写法的变量。
export default {
  name: "Person",
  // data() {
  //   return {
  //     name: "John Doe",
  //     age: 30,
  //     tel: "123-456-7890",
  //   }
  // },
  // methods: {
  //   changeName() {
  //     this.name = "张三";
  //   },
  //   changeAge() {
  //     this.age += 1;
  //   },
  //   showTel() {
  //   },
  // },
  setup() {
    // console.log("@@", this); // setup() 里面的 this 是undifined,vue3中已经弱化this了。
    // 数据 
    // TODO:注意：此时的name不是响应式的，需要使用 ref() 包裹
    let name = "John Doe";
    let age = 30;
    let tel = "123-456-7890";

    // return { a: name, b: age } => { name: name, age: age } //触发对象的简写形式

    // 方法
    function changeName() {
      name = "张三"; // TODO: 这里的name不是响应式的，需要使用 ref() 包裹
    }
    function changeAge() {
      age += 1 // TODO: 这里的age不是响应式的，需要使用 ref() 包裹
    }
    function showTel() {
      alert(tel)
    }
    return { name, age, changeName, changeAge, showTel }

    // TODO: setup的返回值可以是一个函数，返回值会作为渲染函数的返回值
    // return () => "哈哈哈"
  }
};

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