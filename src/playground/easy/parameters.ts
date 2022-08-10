/**
 * @desc 实现内置的 Parameters 类型，而不是直接使用它，可参考https://www.typescriptlang.org/docs/handbook/utility-types.html#parameterstype
 */

const foo = (arg1: string, arg2: number): void => { }

type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]

type MyParameters<T> = T extends (...args: infer V) => unknown ? V : never

let func: FunctionParamsType = ['22', 3]

export default MyParameters