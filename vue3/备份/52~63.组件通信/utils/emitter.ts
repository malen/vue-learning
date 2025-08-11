import mitt from 'mitt'

// 调用mitt的到emitter，emitter能：绑定事件，触发事件
const emitter = mitt()

// 绑定事件
emitter.on('test1', () => {
  console.log('test1被调用了');
})

emitter.on('test2', () => {
  console.log('test2被调用了');
})

// 触发事件
emitter.emit('test1')

setInterval(() => {
  emitter.emit('test1')
  emitter.emit('test2')
}, 2000);

setTimeout(() => {
  // 解绑test1
  emitter.off('test1')

  // 清空所有事件
  // emitter.all.clear()
}, 6000);

// 暴露emitter
export default emitter