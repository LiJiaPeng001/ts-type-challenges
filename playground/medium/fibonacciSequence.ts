/**
 * @desc 实现一个通用的斐波那契<T>，它接受一个数字T并返回其对应的斐波纳契数字。
 *      序列开始：1、1、2、3、5、8、13、21、34、55、89、144。。。
 */

type Result1 = Fibonacci<3> // 2
type Result2 = Fibonacci<8> // 21
type Result3 = Fibonacci<1> // 21

type Fibonacci<T extends number, U extends number[] = [0, 1]> = T