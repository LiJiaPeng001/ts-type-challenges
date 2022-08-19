/**
 * @desc 实现一个类型ReplaceKeys，替换联合类型中的键，如果某个类型没有该键，只需跳过替换，一个类型有三个参数。
 */

type NodeA = {
  type: 'A'
  name: string
  flag: number
}

type NodeB = {
  type: 'B'
  id: number
  flag: number
}

type NodeC = {
  type: 'C'
  name: string
  flag: number
}


type Nodes = NodeA | NodeB | NodeC

type ReplacedNodes = ReplaceKeys<Nodes, 'name' | 'flag', { name: number, flag: string }> // {type: 'A', name: number, flag: string} | {type: 'B', id: number, flag: string} | {type: 'C', name: number, flag: string} // would replace name from string to number, replace flag from number to string.

type ReplacedNotExistKeys = ReplaceKeys<Nodes, 'name', { aa: number }> // {type: 'A', name: never, flag: number} | NodeB | {type: 'C', name: never, flag: number} // would replace name to never

type ReplaceKeys<U, T, Y> = {
  [K in keyof U]: K extends T
  ? K extends keyof Y
  ? Y[K]
  : never
  : U[K]
}
let r: ReplacedNodes = {
  type: 'C',
  name: 2,
  flag: '22'
}

export default ReplaceKeys