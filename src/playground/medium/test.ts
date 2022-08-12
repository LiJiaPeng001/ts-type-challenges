type A = [1, 2, 3]
type B = []
type A1 = [...A] extends [infer X, ...infer Y] ? X : never
type A2 = [...B] extends [infer X, ...infer Y] ? X : never

let a1: A1 = 1
let a2: A2 = 1

console.log()

export default A