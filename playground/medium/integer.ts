/**
 * @desc 请完成类型 Integer<T>，类型 T 继承于 number，如果 T 是一个整数则返回它，否则返回 never。
 */

type Integer1 = Integer<12.5>

type Integer<T extends number> = `${T}` extends `${infer A}.${infer B}` ? A : never