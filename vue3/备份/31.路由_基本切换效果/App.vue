<script lang="ts" setup name="App">
// 安装路由：pnpm add vue-router
import { RouterView, RouterLink } from 'vue-router';

</script>

<template>
  <div class="app">
    <h2>Vue3路由测试</h2>
    <!-- 导航区 -->
    <div class="navigate">
      <router-link to="/home" active-class="active">首页</router-link>
      <router-link to="/news" active-class="active">新闻</router-link>
      <router-link to="/about" active-class="active">关于</router-link>
    </div>
    <!-- 展示区 -->
    <div class="main-content">
      <router-view></router-view>
    </div>

  </div>
</template>
