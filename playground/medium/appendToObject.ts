/**
 * @desc 实现一个为接口添加一个新字段的类型。该类型接收三个参数，返回带有新字段的接口类型。
 */

type Test = { id: '1' }
type Result = AppendToObject<Test, 'value', 4> // expected to be { id: '1', value: 4 }

type AppendToObject<T extends Record<any, any>, K extends PropertyKey, V> = {
  [key in keyof T | K]: key extends K ? V : T[key]
}

export default AppendToObject