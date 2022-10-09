/**
 * @desc 实现类型AllCombinations<S>，它返回最多使用一次S中字符的所有字符串组合。
 */

type AllCombinations_ABC = AllCombinations<'ABC'>;
// should be '' | 'A' | 'B' | 'C' | 'AB' | 'AC' | 'BA' | 'BC' | 'CA' | 'CB' | 'ABC' | 'ACB' | 'BAC' | 'BCA' | 'CAB' | 'CBA'

// type StringToUnion<S> = S extends `${infer F}${infer R}` ? F | StringToUnion<R> : S

// your answers
type ToUnion<S extends string = ''> = S extends `${infer R}${infer D}` ? R | ToUnion<D> : never;

type Pair<S extends string, T extends string = S> = [S] extends [never] ? '' : S extends string ? `${S}${Pair<Exclude<T, S>>}` | Pair<Exclude<T, S>> : never;



/**
 * A => B,C
 * B => C
 * C => B
 */
type Pairs1<S extends string, T extends string = S> = [S] extends [never] ? '' : S extends string ? `${S}${Pair<Exclude<T, S>>}` : never;

type unions = Pairs1<'A' | 'B' | 'C'>

type AllCombinations<S extends string> = Pair<ToUnion<S>>