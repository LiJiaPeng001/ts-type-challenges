/**
 * @desc 假如我们有一个 Promise 对象，这个 Promise 对象会返回一个类型。在 TS 中，我们用 Promise 中的 T 来描述这个 Promise 返回的类型。请你实现一个类型，可以获取这个类型。
 * 例如：Promise<ExampleType>，请你返回 ExampleType 类型。
 */

type ExampleType = Promise<string>

type MyAwaited<T> = T extends Promise<infer V> ? Awaited<T> : never

type Result = MyAwaited<ExampleType> // string

let r: Result = "2"

/**
 * @key infer
 * 类似一个占位符，譬如数组类型，元组类型，函数类型，字符串字面量类型等。这时候可以通过infer来获取某个部分的类型。
 * 1.infer只能在条件类型的 extends 子句中使用
 * 2.infer得到的类型只能在true语句中使用, 即T中使用
 */

export default MyAwaited