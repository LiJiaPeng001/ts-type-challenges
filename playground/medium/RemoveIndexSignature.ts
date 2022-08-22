/**
 * @desc 实现RemoveIndexSignature<T>，从对象类型中排除索引签名。
 */

type Foo = {
  [x: string]: any
  foo(): void;
}

/**
 * @key as 
 */

type Sign = RemoveIndexSignature<Foo>  // expected { foo(): void }

// your answers
type RemoveIndexSignature<T> = {
  [K in keyof T as K extends `${infer G}` ? G : never]: T[K]
}

export default RemoveIndexSignature