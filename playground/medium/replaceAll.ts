/**
 * @desc 实现 ReplaceAll<S, From, To> 将一个字符串 S 中的所有子字符串 From 替换为 To。
 */

type replaced = ReplaceAll<'t y p e s', ' ', ''> // 期望是 'types'

type ReplaceAll<T extends string, from extends string, to extends string> = T extends `${infer A}${from}${infer B}` ? ReplaceAll<`${A}${to}${B}`, from, to> : T

let r: replaced = "types"

export default ReplaceAll