/**
 * @desc FooBarBaz -> foo-bar-baz
 */

type str = KebabCase<"FooBarBazwuhuLijiapeng">

type KebabCase<T, Y extends string = ""> = T extends `${infer A}${infer B}` ? A extends Uppercase<A> ? KebabCase<`${B}`, `${Y}${Y extends '' ? '' : '-'}${Lowercase<A>}`> : KebabCase<`${B}`, `${Y}${A}`> : Y

export default KebabCase