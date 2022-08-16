/**
 * @desc 获取两个接口类型中的差值属性。
 */
type Foo = {
  a: string;
  b: number;
}
type Bar = {
  a: string;
  c: boolean
}

type Result1 = Diff<Foo, Bar> // { b: number, c: boolean }
type Result2 = Bar & Foo // { b: number, c: boolean }

// 自己写的 有点长
// type SelectSave<T extends Record<any, any>, F extends Record<any, any>> = {
//   [key in keyof T & keyof F]: T[key]
// }
// type SelectAll<T extends Record<any, any>, F extends Record<any, any>> = {
//   [key in keyof T | keyof F]: key extends keyof F ? F[key] : T[key]
// }
// type Diff<T extends Record<any, any>, F extends Record<any, any>> = {
//   [key in Exclude<keyof SelectAll<T, F>, keyof SelectSave<T, F>>]: key extends keyof T ? T[key] : F[key]
// }

type Diff<T, F> = {
  [key in Exclude<keyof (T & F), keyof (T | F)>]: (T & F)[key]
}

let d: Result1 = { b: 2, c: true }

export default Diff