/**
 * @desc 实现Math的类型版本。trunc，它接受字符串或数字，并通过删除任何小数返回数字的整数部分。
 */

type A = Trunc<12.34> // 12

type Trunc<T extends number> = `${T}` extends `${infer A}.${infer B}` ? A : T