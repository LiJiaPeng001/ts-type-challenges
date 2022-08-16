/**
 * @desc 实现一个将接收到的String参数转换为一个字母Union的类型。
 */

type Test = '123';
type Result = StringToUnion<Test>; // expected to be "1" | "2" | "3"

type StringToUnion<T extends string, Y extends any[] = []> = `${T}` extends `${infer A}${infer B}` ? StringToUnion<B, [...Y, A]> : Y[number]

let r: Result = "1"

export default StringToUnion