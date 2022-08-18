/**
 * @desc 实现一个类型IsNever，它接受输入类型T。如果类型解析为never，则返回true，否则返回false。
 */

type A = IsNever<never>  // expected to be true
type B = IsNever<undefined> // expected to be false
type C = IsNever<null> // expected to be false
type D = IsNever<[]> // expected to be false
type E = IsNever<number> // expected to be false

type IsNever<T extends any> = [T] extends [never] ? true : false

export default IsNever