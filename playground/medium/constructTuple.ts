/**
 * @desc 构造一个给定长度的元组。
 */

type result = ConstructTuple<2> // 期望得到 [unknown, unkonwn]

type ConstructTuple<N extends number = 0, L extends unknown[] = []> = L["length"] extends N ? L : ConstructTuple<N, [...L, unknown]>