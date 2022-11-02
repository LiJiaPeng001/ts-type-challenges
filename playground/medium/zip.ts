/***
 * @desc 在这个挑战中，你应该实现一个类型Zip＜T，U＞，T和U必须是元组
 */

type exp = Zip<[1, 2], [true, false]> // expected to be [[1, true], [2, false]]


type Zip<T extends any[], U extends any[], L extends 1[] = []> = L['length'] extends T['length'] ? [] : [[T[L['length']], U[L['length']]], ...Zip<T, U, [...L, 1]>]