/**
 * @desc 实现一个通用的 DeepMutable ，它使对象的每个属性，及其递归的子属性 - 可变。
 */

type X = {
  readonly a: () => 1
  readonly b: string
  readonly c: {
    readonly d: boolean
    readonly e: {
      readonly g: {
        readonly h: {
          readonly i: true
          readonly j: "s"
        }
        readonly k: "hello"
      }
    }
  }
}

type Expected = {
  a: () => 1
  b: string
  c: {
    d: boolean
    e: {
      g: {
        h: {
          i: true
          j: "s"
        }
        k: "hello"
      }
    }
  }
}

type Todo = DeepMutable<X> // should be same as `Expected`

let d: Todo = {
  a: () => 1,
  b: '456',
  c: {
    d: true,
    e: {
      g: {
        h: {
          i: true,
          j: "s",
        },
        k: "hello"
      }
    }
  }
}

type DeepMutable<T extends Record<any, any>> = {
  -readonly [K in keyof T as K]: T[K] extends Record<any, any> ? DeepMutable<T[K]> : T[K]
}