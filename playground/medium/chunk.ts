/**
 * @desc 你认识loadsh吗？Chunk是其中一个非常有用的函数，现在让我们来实现它。Chunk＜T，N＞接受两个必需的类型参数，T必须是元组，N必须是大于等于1的整数
 */

type exp1 = Chunk<[1, 2, 3], 2> // expected to be [[1, 2], [3]]
type exp2 = Chunk<[1, 2, 3, 4], 4> // expected to be [[1, 2, 3]]
type exp3 = Chunk<[1, 2, 3], 1> // expected to be [[1], [2], [3]]

type Chunk<T extends any[], U extends number = 1, S extends any[] = []> = T extends [infer A, ...infer B]
  ? U extends S['length'] ? [S, ...Chunk<T, U>] : Chunk<B, U, [...S, A]> : [S]