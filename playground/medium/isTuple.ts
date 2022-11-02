/**
 * @desc 实现一个类型IsTuple，它接受输入类型T并返回T是否为元组类型。
 */

type case1 = IsTuple<[number]> // true
type case2 = IsTuple<readonly [number]> // true
type case3 = IsTuple<number[]> // false

type IsTuple<T> = [T] extends [readonly any[]]
  ? T['length'] extends [...T, any]['length'] ? false : true
  : false