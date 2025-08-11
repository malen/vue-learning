<template>
  <div class="Father">
    <h3>父组件</h3>
    <h4>{{ username }}</h4>
    <!--v-model用在html标签上-->
    <!-- <input type="text" v-model="username"> -->
    <!--v-model的底层原理是：一个动态的value值，配合一个input事件-->
    <!-- <input type="text" :value="username" @input="username = (<HTMLInputElement>$event.target).value"> -->

    <!--v-model用在组件标签上-->
    <AtguiguInput v-model="username" />
    <!--上面的写法等价于下面的写法，UI组件需要根据下面的写法，绑定数据-->
    <!-- <AtguiguInput :modelValue="username" @update:modelValue="username = $event" /> -->
    <!--修改modelValue。像下面这样添加:qwe之后，子组件中的modelValue需要都改成qwe，这样的好处是可以传多组v-model-->
    <!-- <AtguiguInput v-model:qwe="username" /> -->
  </div>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'
import AtguiguInput from './AtguiguInput.vue';


// 数据
const username = ref('奔驰')
</script>
<style lang="scss" scoped>
.Father {
  background-color: rgb(165, 164, 164);
  padding: 20px;
  border-radius: 10px;
}
</style>
