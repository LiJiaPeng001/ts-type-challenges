/**
 * @desc 给定一个字符串数组，执行排列和组合。它还适用于视频控件列表等道具类型
 */

// expected to be `"foo" | "bar" | "baz" | "foo bar" | "foo bar baz" | "foo baz" | "foo baz bar" | "bar foo" | "bar foo baz" | "bar baz" | "bar baz foo" | "baz foo" | "baz foo bar" | "baz bar" | "baz bar foo"`
type Keys = Combination<['foo', 'bar', 'baz']>

// 答案
type Combination<T extends string[], U = T[number], A = U> =
  A extends string ?
  A | `${A} ${Combination<T, Exclude<U, A>>}` : never


// A B C  |  A B | AC | 