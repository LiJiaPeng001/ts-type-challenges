/**
 * @desc 实现Object.entries的类型版本
 */

interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}

type modelEntries = ObjectEntries<Model> // ['name', string] | ['age', number] | ['locations', string[] | null];

type ObjectEntries<T> = {
  [K in keyof T]: [K, T[K]]
}[keyof T]

export default ObjectEntries