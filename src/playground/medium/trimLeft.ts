/**
 * @desc 实现 TrimLeft<T> ，它接收确定的字符串类型并返回一个新的字符串，其中新返回的字符串删除了原字符串开头的空白字符串。
 */

type trimed = TrimLeft<'  Hello World  '> // 应推导出 'Hello World  '
type trimed2 = TrimRight<'  Hello World  '> // 应推导出 'Hello World  '
type trimed3 = Trim<'  Hello World  '> // 应推导出 'Hello World  '

type TrimLeft<V extends string> = V extends ` ${infer R}` ? TrimLeft<R> : V
type TrimRight<V extends string> = V extends `${infer R} ` ? TrimRight<R> : V
type Trim<V extends string> = V extends ` ${infer R} ` ? Trim<R> : V

export default TrimLeft