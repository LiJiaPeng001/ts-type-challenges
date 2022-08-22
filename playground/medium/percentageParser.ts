/**
 * @desc 实现类型 PercentageParser。根据规则 /^(\+|\-)?(\d*)?(\%)?$/ 匹配类型 T。
 * 匹配的结果由三部分组成，分别是：[正负号, 数字, 单位]，如果没有匹配，则默认是空字符串。
 */

type PString1 = ''
type PString2 = '+85%'
type PString3 = '-85%'
type PString4 = '85%'
type PString5 = '85'

type R1 = PercentageParser<PString1> // expected ['', '', '']
type R2 = PercentageParser<PString2> // expected ["+", "85", "%"]
type R3 = PercentageParser<PString3> // expected ["-", "85", "%"]
type R4 = PercentageParser<PString4> // expected ["", "85", "%"]
type R5 = PercentageParser<PString5> // expected ["", "85", ""]

type IsSign<T> = T extends `${infer B}${infer A}` ? B extends "+" | "-" ? B : '' : ''
type IsPercent<T> = T extends `${infer A}%` ? '%' : ''
type PercentageParser<T extends string> = [IsSign<T>, T extends `${IsSign<T>}${infer A}${IsPercent<T>}` ? A : '', IsPercent<T>]

export default PercentageParser