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
export default {
  name: "Person",
  // Vue3 中同样支持vue2的语法
  data() {
    return {
      name: "John Doe",
      age: 30,
      tel: "123-456-7890",
    }
  },
  methods: {
    changeName() {
      this.name = "张三";
    },
    changeAge() {
      this.age += 1;
    },
    showTel() {
      alert(this.tel)
    },
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