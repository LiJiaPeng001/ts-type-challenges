/**
 * @desc 实现Array.shift的类型版本
 */

type Result = Shift<[3, 2, 1]> // [2, 1]

type Shift<T> = T extends [infer A, ...infer B] ? B : T

export default Shift