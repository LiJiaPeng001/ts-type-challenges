/**
 * @desc 在类型系统里实现通用的 Array.push 。
 */

type Result = Push<[1, 2], '3'> // [1, 2, '3']

type Push<T extends unknown[], K> = [...T, K]

export default Push