/**
 * @desc 在这个挑战中，你应该实现一个类型GreaterThan<T，U>，比如T>U  负数不需要考虑。
 */

type g1 = GreaterThan<2, 1> //should be true
type g2 = GreaterThan<1, 1> //should be false
type g3 = GreaterThan<2, 1> //should be true
// 1.T > F true
// 2. T < F false
// 3. T = F false
type GreaterThan<T extends number, F extends number, U extends 1[] = []> = T extends U['length'] ? false : F extends U['length'] ? true : GreaterThan<T, F, [...U, 1]>
