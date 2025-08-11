<template>
  <div class="container">
    <h1>Vue3 组件间通信</h1>
    <hr>
    <div class="row">
      <div class="col-xs-3 col-md-3 col-lg-3 col-xl-3">
        <!--导航区-->
        <router-link active-class="active" class="list-group-item" to="/props">01_props</router-link>
        <router-link active-class="active" class="list-group-item" to="/event">02_custom-event</router-link>
        <router-link active-class="active" class="list-group-item" to="/mitt">03_mitt</router-link>
        <router-link active-class="active" class="list-group-item" to="/model">04_v-model</router-link>
        <router-link active-class="active" class="list-group-item" to="/attrs">05_$attrs</router-link>
        <router-link active-class="active" class="list-group-item" to="/ref-parent">06_$refs-$parent</router-link>
        <router-link active-class="active" class="list-group-item" to="/provide-inject">07_provide-inject</router-link>
        <router-link active-class="active" class="list-group-item" to="/pinia">08_pinia</router-link>
        <router-link active-class="active" class="list-group-item" to="/slot">90_slot</router-link>
      </div>
      <div class="col-xs-9 col-md-9 col-lg-9 col-xl-9">
        <div class="panel-body">
          <!--占位一个展示区-->
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>

</script>