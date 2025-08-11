// 跟组件名对应
import axios from "axios"
import { nanoid } from "nanoid"
import { defineStore } from "pinia"
import { reactive } from "vue"

// 两个参数。
// 1.ID跟文件名对应
// 2.配置对象，state必须为函数
export const useCountStore = defineStore('count', {
  // 放置方法，用于响应组件中的动作
  actions: {
    increment(value: number) {
      this.sum += value
    }
  },
  state() {
    return {
      sum: 6,
      school: '尚硅谷',
      address: '北京'
    }
  },
  getters: {
    bigSum: state => state.sum * 3,
    upperSchool(): string {
      return this.school.toUpperCase()
    }
  }
})

