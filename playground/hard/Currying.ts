/**
 * @desc Currying 是一种将带有多个参数的函数转换为每个带有一个参数的函数序列的技术。
 */

const add = (a: number, b: number) => a + b
const three = add(1, 2)

const curriedAdd = Currying(add)
const five = curriedAdd(2)(3)

/**
 * 1. 获取参数length
 */

type Curry<T> = T extends (...args: infer Args) => infer R ?
  Args extends [infer A, ...infer Rest] ?
  (k: A) => Curry<(...args: Rest) => R> : R : never

declare function Currying<Fn>(fn: Fn): Curry<Fn>