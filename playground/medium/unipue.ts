/**
 * @desc 实现Lodash的类型版本。uniq，Unique接受数组T，返回数组T，不重复值。
 */

type u1 = Unique<[1, 1, 2, 2, 3, 3]>; // expected to be [1, 2, 3]
type u2 = Unique<[1, 2, 3, 4, 4, 5, 6, 7]>; // expected to be [1, 2, 3, 4, 5, 6, 7]
type u3 = Unique<[1, "a", 2, "b", 2, "a"]>; // expected to be [1, "a", 2, "b"]
type u4 = Unique<[string, number, 1, "a", 1, string, 2, "b", 2, number]>; // expected to be [string, number, 1, "a", 2, "b"]
type Res4 = Unique<[unknown, unknown, any, any, never, never]>; // expected to be [unknown, any, never]

type IsEqual<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T1>() => T1 extends B ? 1 : 2) ? true : false

type Includes<T, V, I extends boolean = false> = T extends [infer A, ...infer Rest] ? IsEqual<V, A> extends true ? Includes<Rest, V, true> : Includes<Rest, V, I> : I

type Unique<T extends any[], N extends any[] = []> = T extends [infer A, ...infer B] ? Includes<N, A> extends true ? Unique<B, N> : Unique<B, [...N, A]> : N