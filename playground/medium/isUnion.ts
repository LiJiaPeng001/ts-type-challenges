/**
 * @desc 实现类型IsUnion，它接受输入类型T并返回T是否解析为联合类型。
 */

type case1 = IsUnion<string>  // false
type case2 = IsUnion<string | number>  // true
type case3 = IsUnion<[string | number]>  // false

type IsUnion<T, F = T> = F extends F ? [T] extends [F] ? false : true : false

/**
 * 1. T
 * 2. string | number => string       string | number => number    false
 */

type ForArray<T> = [T] extends [any] ? T[] : never
type ForArray1<T> = T extends any ? T[] : never

type A1 = ForArray<string | number>
type A2 = ForArray1<string | number>

export default IsUnion