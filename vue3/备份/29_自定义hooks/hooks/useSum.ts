import { ref } from 'vue'

export default function () {
  // 数据
  let sum = ref(0)


  function add() {
    sum.value += 1
  }

  // 向外提供东西
  return { sum, add }
}
