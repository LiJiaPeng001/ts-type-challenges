/**
 * @desc 实现一个通用的斐波那契<T>，它接受一个数字T并返回其对应的斐波纳契数字。
 *      序列开始：1、1、2、3、5、8、13、21、34、55、89、144。。。
 */
type Result2 = Fibonacci<12> // 21

type Fibonacci<
  T extends number,
  No extends 1[] = [1, 1, 1],
  N_2 extends 1[] = [1],
  N_1 extends 1[] = [1]
> = T extends 1 | 2
  ? 1
  : T extends No['length']
  ? [...N_2, ...N_1]['length']
  : Fibonacci<T, [...No, 1], N_1, [...N_2, ...N_1]>

/**
 * 1.  5 [...4],[1],[1,1]
 * 2.  5 [...5],[1,1],[1,1,1]
 * 3.  5 [...6],[1,1,1],[1,1,1,1,1]
 */
