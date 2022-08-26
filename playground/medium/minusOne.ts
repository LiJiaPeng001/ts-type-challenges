/**
 * @desc 给定一个数字（总是正的）作为类型。类型应返回减少1的数字。
 */

type Zero = MinusOne<1> // 0
type FiftyFour = MinusOne<55> // 54
type nine = MinusOne<9> // 8
type fivetyOne = MinusOne<1000> // 54

// 1 number to array
// 2 arr.shift()
// 3 arr.length
// 4 999次
// type NumberToArray<T, A extends any[] = []> = A['length'] extends T ? A : NumberToArray<T, [...A, 1]>
// type MinusOne<T> = NumberToArray<T> extends [any, ...infer A] ? A['length'] : 0
type Nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
type MinusOne<T extends number> = T



export default MinusOne