/**
 * @desc 实现 TrimRight<T> ，它接收确定的字符串类型并返回一个新的字符串，其中新返回的字符串删除了原字符串结尾的空白字符串。
 */

type Trimed = TrimRight<'  Hello World  \n'> // 应推导出 '  Hello World'

type TrimRight<S extends string> = S extends `${infer A}${' ' | '\t' | '\n'}` ? TrimRight<A> : S
// TrimRight<'str     '>
// TrimRight<'str    '>
// TrimRight<'str   '>
// TrimRight<'str  '>
// TrimRight<'str '>
// TrimRight<'str'>
// 'str'