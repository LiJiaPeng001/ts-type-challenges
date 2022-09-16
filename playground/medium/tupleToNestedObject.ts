/**
 * @desc 给定只包含字符串类型的元组类型T和类型U，递归地构建对象。
 */

type a = TupleToNestedObject<['a'], string> // {a: string}
type b = TupleToNestedObject<['a', 'b'], number> // {a: {b: number}}
type c = TupleToNestedObject<['a', 'b', 'c'], boolean> // boolean. if the tuple is empty, just return the U type

type TupleToNestedObject<T extends PropertyKey[], R> = T extends [infer A extends PropertyKey, ...infer B extends PropertyKey[]] ?
  Record<A, TupleToNestedObject<B, R>> : R

let aa: a = { a: '3' }
let cc: c = {
  a: {
    b: {
      c: false
    }
  }
}
export default TupleToNestedObject