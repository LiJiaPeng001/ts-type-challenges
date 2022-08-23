/**
 * @desc 实现StartsWith<T，U>，它接受两种精确的字符串类型，并返回T是否以U开头
 */

type a = StartsWith<'abc', 'ac'> // expected to be false
type b = StartsWith<'abc', 'ab'> // expected to be true
type c = StartsWith<'abc', 'abcd'> // expected to be false
type d = StartsWith<'abc', 'abc'> // expected to be false

type StartsWith<T, R extends string> = T extends `${R}${infer A}` ? true : false

export default StartsWith