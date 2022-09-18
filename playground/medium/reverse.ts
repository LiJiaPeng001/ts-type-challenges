/**
 * @desc 实现Array.reverse的类型版本
 */

type a = Reverse<['a', 'b']> // ['b', 'a']
type b = Reverse<['a', 'b', 'c']> // ['c', 'b', 'a']

type Reverse<T extends any[], N extends any[] = []> = T extends [...infer B, infer A] ? Reverse<B, [...N, A]> : N

export default Reverse