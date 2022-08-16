/**
 * @desc 实现 Replace<S, From, To> 将字符串 S 中的第一个子字符串 From 替换为 To 。
 */

type replaced = Replace<'types are fun!', 'fun', 'awesome'> // 期望是 'types are awesome!'

type Replace<T extends string, X extends string, Y extends string> = T extends `${infer A}${X}${infer B}` ? `${A}${Y}${B}` : T

let r: replaced = "types are awesome!"

export default Replace