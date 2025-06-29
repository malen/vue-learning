import { reactive, onMounted } from 'vue'
import axios from 'axios'

export default function () {
  // 数据
  let dogList = reactive([
    'https://images.dog.ceo/breeds/pembroke/n02113023_827.jpg'
  ])

  async function getDog() {
    try {
      let result = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
      dogList.push(result.data.message)
    } catch (error) {
      alert(error)
    }

  }
  // hooks中也可以添加钩子
  onMounted(() => {
    getDog()
  })
  // 向外提供东西
  return { dogList, getDog }
}