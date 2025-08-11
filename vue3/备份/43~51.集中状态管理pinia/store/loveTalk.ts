// 跟组件名对应
import { defineStore } from "pinia"

// 两个参数。
// 1.ID跟文件名对应
// 2.配置对象，state必须为函数
export const useTalkStore = defineStore('talk', {
  state() {
    return {
      talkList: [
        { id: 'xxdafasf01', title: '今天你有点怪，哪里怪？怪好看的！' },
        { id: 'xxdafasf02', title: '草莓，蓝莓，蔓越莓，今天想我了没？' },
        { id: 'xxdafasf03', title: '心里给你留了一块地，我的死心塌地。' },
      ]
    }
  },
})