/**
 * @desc 实现一个像 Lodash.without 函数一样的泛型 Without<T, U>，它接收数组类型的 T 和数字或数组类型的 U 为参数，会返回一个去除 U 中元素的数组 T。
 */

type Res = Without<[1, 2], 1>; // expected to be [2]
type Res1 = Without<[1, 2, 4, 1, 5], [1, 2]>; // expected to be [4, 5]
type Res2 = Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>; // expected to be []

type Without<
  T extends any[],
  V extends any | any[],
  L extends any[] = V extends any[] ? V : [V]
> = T extends [infer A, ...infer B] ? A extends L[number] ? [...Without<B, V>] : [A, ...Without<B, V>] : []