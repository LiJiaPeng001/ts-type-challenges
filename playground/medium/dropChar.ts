/**
 * @desc 从字符串中剔除指定字符。
 */

type Butterfly = DropChar<' b u t t e r f l y ! ', ' '> // 'butterfly!'

type DropChar<T extends string, R extends string> =
  T extends `${infer left}${R}${infer rest}` ?
  `${left}${DropChar<rest, R>}`
  : T

export default DropChar