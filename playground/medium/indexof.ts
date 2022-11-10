/**
 * @desc 实现Array.indexOf的类型版本，indexOf＜T，U＞接受数组T，任意U，并返回数组T中第一个U的索引。
 */

type Res11 = IndexOf<[1, 2, 3], 2>; // expected to be 1
type Res111 = IndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>; // expected to be 2
type Res2222 = IndexOf<[0, 0, 0], 2>; // expected to be -1

type IndexOf<T extends any[],
  N extends any,
  Count extends 0[] = []> =
  T extends [infer A, ...infer B] ?
  A extends N ?
  IndexOf<B, N, [...Count, 0]> :
  IndexOf<B, N, Count> :
  Count['length'] extends 0 ? -1 : Count['length']
