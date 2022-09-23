/**
 * @desc Block，Element，Modifier方法（BEM）是CSS中类的流行命名约定。
 *    例如，块组件将用btn表示，依赖于块的元素将用btn_price表示，更改块样式的修饰符将用btn-big或btn_price-warning表示。
 *    实现从这三个参数生成字符串联合的BEM<B、E、M>。其中B是字符串文字，E和M是字符串数组（可以为空）。
 */
// your answers
type NBEM = BEM<'btn', ['prize', 'wuhu'], ['success', 'warning']>
type NBEM1 = BEM<'btn', [], ['success', 'warning']>

// type BEM<B extends string, E extends string[] = [], M extends string[] = []> = E extends [infer A, ...any] ?
//   M extends [infer Q, ...any] ? `${B}_${E[number]}-${M[number]}`
//   : `${B}_${E[number]}`
//   : M extends [infer Q, ...any] ? `${B}-${M[number]}` : B

// your answers
type BEM<B extends string, E extends string[], M extends string[]> = `${B}${E[number] extends '' ? '' : `__${E[number]}`}${M[number] extends '' ? '' : `--${M[number]}`}`
