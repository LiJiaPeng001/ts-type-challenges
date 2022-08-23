/**
 * @desc 实现EndsWith＜T，U＞它接受两种精确的字符串类型，并返回T是否以U结尾
 */

type a = EndsWith<'abc', 'bc'> // expected to be true
type b = EndsWith<'abc', 'abc'> // expected to be true
type c = EndsWith<'abc', 'd'> // expected to be false

type EndsWith<T, R extends string> = T extends `${infer A}${R}` ? true : false

export default EndsWith