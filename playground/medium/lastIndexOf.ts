/**
 * @desc  实现Array的类型版本。lastIndexOf，lastIndexOf<T，U>获取数组T，任意U，并返回数组T中最后一个U的索引
 */

type l1 = LastIndexOf<[1, 2, 3, 2, 1], 2> // 3
type l2 = LastIndexOf<[0, 0, 0], 2> // -1


type IndexMaps<T extends any[], I, Count extends any[] = [], N extends number = -1> = T extends [infer A, ...infer B] ?
  A extends I ? IndexMaps<B, I, [...Count, 1], Count['length']> :
  IndexMaps<B, I, [...Count, 1], N>
  : N
type LastIndexOf<T extends any[], I> = IndexMaps<T, I>
