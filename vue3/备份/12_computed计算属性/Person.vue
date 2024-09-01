<template>
  <div class="Person">
    姓：<input type="text" v-model="firstname"><br>
    名：<input type="text" v-model="lastname"><br>
    <!-- TODO: 这种写法导致模版变得复杂不易维护 -->
    <!-- 全名：<span>{{ firstname.slice(0, 1).toUpperCase() + firstname.slice(1).toLowerCase() }}-{{ lastname }}</span><br> -->
    全名：<span>{{ fullNameReadOnly }}</span><br>
    全名：<span>{{ fullNameRW }}</span><br>
    <button @click="changeFullName">将全名改成li-si</button>
  </div>
</template>

<script setup lang="ts" name="Person">
import { ref, computed } from 'vue'

let firstname = ref('zhang')
let lastname = ref('san')


let fullNameReadOnly = computed(() => {
  console.log('computed 计算属性：如果依赖的数据发生变化，则重新计算，否则即使被多次调用，也只计算一次。有缓存机制。');
  // 直接return的计算属性是只读的，如果要使其可读写，要用getter和setter
  return firstname.value.slice(0, 1).toUpperCase() + firstname.value.slice(1).toLowerCase() + "-" + lastname.value
})

// 这样定义的fullNameRW是可读写的计算属性
let fullNameRW = computed({
  get() {
    return firstname.value.slice(0, 1).toUpperCase() + firstname.value.slice(1).toLowerCase() + "-" + lastname.value
  },
  set(val) {
    console.log(val);
    // let arr = val.split('-')
    // firstname.value = arr[0]
    // lastname.value = arr[1]
    // 这种写法不会因为val没有横线导致数组越界
    const [str1, str2] = val.split('-')
    firstname.value = str1
    lastname.value = str2
  }
})

function changeFullName() {
  fullNameRW.value = 'lisi'
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
