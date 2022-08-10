/**
 * @desc 实现泛型TupleToUnion<T>，它返回元组所有值的合集。
 */

type Arr = ['1', '2', '3']

type TupleToUnion<T extends unknown[]> = T[number]

type Test = TupleToUnion<Arr> // expected to be '1' | '2' | '3'

let t: Test = "2"


export default TupleToUnion