/**
 * @desc // 将类型为字面类型（标签类型）的属性，转换为基本类型。
 */

type PersonInfo = { name: 'Tom', age: 30, married: false, addr: { home: '123456', phone: '13111111111' } }
// 要求结果如下： type PersonInfo = { name: string, age: number, married: boolean, addr: { home: string, phone: string } }

type BasicType = ToBasicType<PersonInfo>

type ReturnTypes<T> = T extends number ?
  number : T extends string ?
  string : T extends boolean ?
  boolean : never

type ToBasicType<T extends Record<any, any>> = {
  [K in keyof T]: T[K] extends Record<any, any> ? ToBasicType<T[K]> : ReturnTypes<T[K]>
}