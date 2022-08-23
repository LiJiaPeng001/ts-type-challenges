/**
 * @desc 实现一个通用的PartialByKeys<T，K>，它接受两种类型的参数T和K。
 * K指定应设置为可选的T的属性集。当不提供K时，它应该使所有属性都是可选的，就像正常的部分＜T＞一样。
 */

interface User {
  name: string
  age: number
  address: string
}

type UserPartialName = PartialByKeys<User, 'name'> // { name?:string; age:number; address:string }

type PartialByKeys<T, R extends keyof T> = Omit<T, R> & {
  [key in R]?: T[key]
}

let name: UserPartialName = {
  age: 2,
  address: "222",
}

export default PartialByKeys