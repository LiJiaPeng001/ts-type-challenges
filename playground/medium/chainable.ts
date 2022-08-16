/**
 * @desc 
 * 在 JavaScript 中我们经常会使用可串联（Chainable/Pipeline）的函数构造一个对象，但在 TypeScript 中，你能合理的给它赋上类型吗？
 * 在这个挑战中，你可以使用任意你喜欢的方式实现这个类型 - Interface, Type 或 Class 都行。你需要提供两个函数 option(key, value) 和 get()。
 * 在 option 中你需要使用提供的 key 和 value 扩展当前的对象类型，通过 get 获取最终结果。
 */

declare const config: Chainable

/**
 * @key PropertyKey
 *    
 * type PropertyKey = string | number | symbol;
 */

type Chainable<T = {}> = {
  option: <X extends PropertyKey, Y>(key: X, value: X extends keyof T ? T[X] : Y) => Chainable<{
    [key in X | keyof T]: key extends X ? Y : key extends keyof T ? T[key] : never
  }>
  get: () => T
}

const result = config
  .option('foo', 123)
  .option('name', 'type-challenges')
  .option('bar', { value: 'Hello World', name: { age: 2 } })
  .get()


console.log(result)

// 期望 result 的类型是：
interface Result {
  foo: number
  name: string
  bar: {
    value: string
  }
}

export default Chainable