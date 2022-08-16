/**
 * @desc 实现联合类型的全排列，将联合类型转换成所有可能的全排列数组的联合类型。
 */


/**
 * @key never
 * never是一个联合类型，一个为空的联合类型，当作泛型传入后因为一个成员也没有也就不需要计算了直接返回never
 */

type perm = Permutation<'A' | 'B' | 'C'>; // ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']

type Permutation<T, Y extends any[] = [], K = T> = [T] extends [never] ? Y : K extends K ? Permutation<Exclude<T, K>, [...Y, K]> : never

let p: perm = ['A', 'C', 'B']

/**------------------------------------------------------------------------------------ */

type MakesSense<T> = T extends never ? 'yes' : 'no'
type ExtendsNever<T> = [T] extends [never] ? 'yes' : 'no'


type never1 = ExtendsNever<never>  // yes
type never2 = MakesSense<never>  // never

/**------------------------------------------------------------------------------------ */

// type ToArray<Type> = Type extends any ? Type[] : never;

// type StrArrOrNumArr = ToArray<string | number>;

// let str: StrArrOrNumArr = [1, 2, 3]

/**------------------------------------------------------------------------------------ */

// type ToArrayNonDist<Type> = [Type] extends [any] ? Type[] : never;

// // 'StrArrOrNumArr' is no longer a union.
// type StrArrOrNumArr = ToArrayNonDist<string | number>;

// let str: StrArrOrNumArr = [1, 2, 3, '2']


export default Permutation