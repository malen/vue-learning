// 定义一个借口，用于限制person对象的具体属性
// 分别暴露。暴露有三种方式：默认暴露，分别暴露，统一暴露
export interface IPerson {
  id: string,
  name: string,
  age: number,
}
