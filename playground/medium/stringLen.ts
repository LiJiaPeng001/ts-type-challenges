/**
 * @desc 计算字符串的长度，类似于 String#length 。
 */

type StrLen = StringLen<'我永远喜欢Aimer'>

type StringLen<T extends string, Y extends string[] = []> = T extends `${infer A}${infer B}` ? StringLen<B, [...Y, A]> : Y['length']

let len: StrLen = 10

export default StringLen