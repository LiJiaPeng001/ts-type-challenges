/**
 * @desc 不使用 Omit 实现 TypeScript 的 Omit<T, K> 泛型。
 * Omit 会创建一个省略 K 中字段的 T 对象。
 */

interface Todo {
  title: string
  description: string
  completed: boolean
}

type MyOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

/**
 * @key pick && exclude 见easy
 */

type TodoPreview = MyOmit<Todo, 'description' | 'title'>

const todo: TodoPreview = {
  completed: false,
}

export default MyOmit