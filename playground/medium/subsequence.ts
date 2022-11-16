/**
 * @desc 给定一个唯一元素数组，返回所有可能的子序列。
子序列是一个序列，可以通过删除一些或不删除元素而不改变其余元素的顺序从数组中导出。
 */

type SubsequenceA = Subsequence<[1, 2]> // [] | [1] | [2] | [1, 2]

type Subsequence<T extends any[]> =
  T extends [infer F, ...infer Rest]
  ? [F, ...Subsequence<Rest>] | Subsequence<Rest>
  : T