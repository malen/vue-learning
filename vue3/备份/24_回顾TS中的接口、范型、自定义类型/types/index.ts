// 定义一个接口，用于限制person对象的具体属性
// 分别暴露。暴露有三种方式：默认暴露，分别暴露，统一暴露
export interface IPerson {
  id: string,
  name: string,
  age: number,
}

// 一个自定义类型
// export type IPersons = Array<IPerson>
export type IPersons = IPerson[]