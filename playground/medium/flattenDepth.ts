/**
 * @desc 递归将数组展平到深度倍。
 */
type a = FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2> // [1, 2, 3, 4, [5]]. flattern 2 times
type b = FlattenDepth<[1, 2, [7, [8]], [3, 4], [[[5]]]], 2> // [1, 2, 3, 4, [[5]]]. Depth defaults to be 1

// 打平一层
type FlattenDepth1<T> = T extends [infer A, ...infer B] ? A extends any[] ? [...A, ...FlattenDepth<B>] : [A, ...FlattenDepth<B>] : T;

// 递归打平
type FlattenDepth2<T> = T extends [infer A, ...infer B] ? A extends any[] ? [...FlattenDepth<A>, ...FlattenDepth<B>] : [A, ...FlattenDepth<B>] : T;

// 加入数字判断
type FlattenDepth<T, N extends number = 1, U extends any[] = []> = U['length'] extends N
  ? T
  : T extends [infer A, ...infer B]
  ? A extends any[]
  ? [...FlattenDepth<A, N, [...U, 1]>, ...FlattenDepth<B, N, U>]
  : [A, ...FlattenDepth<B, N, U>]
  : T