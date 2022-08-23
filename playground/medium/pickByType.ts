/**
 * @desc 从T中选择一组类型可分配给U的属性。
 */
type OnlyBoolean = PickByType<{
  name: string
  count: number
  isReadonly: boolean
  isEnable: boolean
}, boolean> // { isReadonly: boolean; isEnable: boolean; }

type PickByType<T, R> = {
  [K in keyof T as T[K] extends R ? K : never]: T[K]
}

export default PickByType