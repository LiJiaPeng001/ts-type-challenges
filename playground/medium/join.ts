/**
 * @desc 实现Array.join的类型版本，join＜T，U＞接受一个数组T、字符串或数字U，并返回带有U缝合的数组T。
 */

type j1 = Join<["a", "p", "p", "l", "e"], "-">; // expected to be 'a-p-p-l-e'
type j2 = Join<["Hello", "World"], " ">; // expected to be 'Hello World'
type j3 = Join<["2", "2", "2"], 1>; // expected to be '21212'
type Res3 = Join<["o"], "u">; // expected to be 'o'

type Join<T, V extends string | number, S extends string = ""> =
  T extends [infer A extends string, ...infer B] ?
  B extends [] ? `${S}${A}` :
  Join<B, V, `${S}${A}${V}`> : never

