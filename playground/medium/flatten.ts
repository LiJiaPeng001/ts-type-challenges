/**
 * @desc 在这个挑战中，你需要写一个接受数组的类型，并且返回扁平化的数组类型。
 */

type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, 5]

type Flatten<T, Y extends any[] = []> = T extends [infer A, ...infer B] ? A extends any[] ? Flatten<[...A, ...B], Y> : Flatten<[...B], [...Y, A]> : Y

export default Flatten