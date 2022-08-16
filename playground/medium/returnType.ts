/**
 * @desc 不使用 ReturnType 实现 TypeScript 的 ReturnType<T> 泛型。
 */

const fn = (v: boolean) => {
  if (v)
    return 1
  else
    return 2
}

type MyReturnType<T> = T extends (...ages: any[]) => infer V ? V : never

type a = MyReturnType<typeof fn> // 应推导出 "1 | 2"

let value: a = 1

export default MyReturnType