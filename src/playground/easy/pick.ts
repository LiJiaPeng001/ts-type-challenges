/**
 * @desc 
 * 实现 TS 内置的 Pick<T, K>，但不可以使用它。
 * 从类型 T 中选择出属性 K，构造成一个新的类型。
 */

interface Todo {
  title: string
  description: string
  completed: boolean
};

type MyPick<T, K extends keyof T> = {
  [key in K]: T[K]
};

type TodoPreview = MyPick<Todo, 'title' | 'completed'>;

let todo: TodoPreview = {
  title: "title",
  completed: "completed"
}

export default MyPick;