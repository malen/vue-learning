import { customRef } from "vue"

export default function (initValue: string, delay: number) {
  // 使用vue提供的customRef定义响应式数据
  // let initValue = '你好customRef'
  let timer: number
  const msg = customRef((track, trigger) => {
    return {
      get() {
        track() // 告诉vue数据msg很重要，要对msg进行持续关注，一旦msg变化就去更新
        return initValue
      },
      set(value) {
        clearTimeout(timer)
        timer = setTimeout(() => {
          initValue = value
          trigger() // 通知vue，数据msg变化了
        }, delay)
      },
    }
  })

  return { msg }
}