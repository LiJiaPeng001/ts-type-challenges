/**
 * @desc Fill是一个常见的JavaScript函数，现在让我们用类型来实现它。
 * 填充<T，N，开始？，结束？>，如您所见，Fill接受四种类型的参数，
 * 其中T和N是必需参数，Start和End是可选参数。这些参数的要求是：
 * T必须是元组，N可以是任何类型的值，Start和End必须是大于或等于0的整数。
 * 1.全部实现
 * 2.
 */

type Exp = Fill<[1, 2, 3, 4, 5], 3, 1, 3> // expected to be [0, 0, 0]

type Fill<T extends any[], F extends number = 0, S extends number = 0, E extends number = T['length'], Count extends any[] = [], IsStart extends boolean = S extends Count['length'] ? true : false> =
  E extends Count['length'] ?
  T :
  T extends [infer A, ...infer B] ?
  IsStart extends true ?
  [F, ...Fill<B, F, S, E, [...Count, F], IsStart>] :
  [A, ...Fill<B, F, S, E, [...Count, A]>] :
  T