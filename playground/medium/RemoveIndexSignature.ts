/**
 * @desc 实现RemoveIndexSignature<T>，从对象类型中排除索引签名。
 */

type Foo = {
  [key: string]: any;
  foo(): void;
}

/**
 * @key as 
 */

type A = RemoveIndexSignature<Foo>  // expected { foo(): void }

type RemoveIndexSignature<T, P = PropertyKey> = {
  [K in keyof T as  P extends K ? never : K extends P ? K : never]: T[K]
}


export default RemoveIndexSignature