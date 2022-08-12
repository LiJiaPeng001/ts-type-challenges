/**
 * @desc 实现一个通用Pop<T>，它接受一个数组T并返回一个没有最后一个元素的数组。
 */

type arr1 = ['a', 'b', 'c', 'd']
type arr2 = [3, 2, 1]

type re1 = Pop<arr1> // expected to be ['a', 'b', 'c']
type re2 = Pop<arr2> // expected to be [3, 2]

type Pop<T extends unknown[]> = T extends [...infer L, any] ? L : never

let r: re1 = ['a', 'b', 'c']

export default Pop