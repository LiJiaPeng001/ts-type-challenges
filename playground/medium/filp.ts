/**
 * @desc 实现只翻转对象的类型。
 */

type file1 = Flip<{ a: "x", b: "y", c: "z" }>; // {x: 'a', y: 'b', z: 'c'}
type file2 = Flip<{ a: 1, b: 2, c: 3 }>; // {1: 'a', 2: 'b', 3: 'c'}
type file3 = Flip<{ a: false, b: true }>; // {false: 'a', true: 'b'}

// your answers

type Flip<T extends Record<PropertyKey, any>> = {
  [P in keyof T as T[P] extends PropertyKey ? T[P] : `${T[P]}`]: P
}