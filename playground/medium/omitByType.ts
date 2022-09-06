/**
 * @desc  从T中选择一组类型不可分配给U的属性。
 */

type OmitBoolean = OmitByType<{
  name: string
  count: number
  isReadonly: boolean
  isEnable: boolean
}, boolean> // { name: string; count: number }

type OmitByType<T, R> = {
  [K in keyof T as T[K] extends R ? never : K]: T[K]
}

export default OmitByType