/**
 * @desc 实现一个通用Last<T>，它接受一个数组T并返回其最后一个元素的类型。
 */

type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type tail1 = Last<arr1> // expected to be 'c'
type tail2 = Last<arr2> // expected to be 1

type Last<T extends unknown[]> = T extends [...any, infer L] ? L : never

let arr: tail1 = "c"

export default Last