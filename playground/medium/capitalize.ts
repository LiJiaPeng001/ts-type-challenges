/**
 * @desc 实现 Capitalize<T> 它将字符串的第一个字母转换为大写，其余字母保持原样。
 */
type capitalized = Capitalize<'hello world'> // expected to be 'Hello world'

type Capitalize<T extends string> = T extends `${infer A}${infer B}` ? `${Uppercase<A>}${B}` : never

let c: capitalized = 'Hello world'

export default capitalized