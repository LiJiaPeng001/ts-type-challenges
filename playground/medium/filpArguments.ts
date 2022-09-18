/**
 * @desc 实现lodash的_ flip的类型版本。
 * 类型FlipArguments＜T＞需要函数类型T，并返回一个新的函数类型，该函数类型具有相同的返回类型T，但参数相反。
 */

type Flipped = FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void>
// (arg0: boolean, arg1: number, arg2: string) => void

type FlipArguments<T, N extends any[] = []> = T extends (...args: infer A) => void ?
  A extends [...infer F, infer E] ? FlipArguments<(...args: F) => void, [...N, E]> :
  (...args: N) => void : T

export default FlipArguments