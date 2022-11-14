/**
 * @desc 实现MapTypes＜T，R＞，它将对象T中的类型转换为由类型R定义的不同类型，类型R具有以下结构
 */

type StringToNumber1 = { mapFrom: string; mapTo: number; }
type p1 = MapTypes<{ iWillBeANumberOneDay: string }, StringToNumber1> // gives { iWillBeANumberOneDay: number; }

type StringToNumber2 = { mapFrom: string; mapTo: number; }
type StringToDate = { mapFrom: string; mapTo: Date; }
type p2 = MapTypes<{ iWillBeNumberOrDate: string }, StringToDate | StringToNumber2> // gives { iWillBeNumberOrDate: number | Date; }

type StringToNumber3 = { mapFrom: string; mapTo: number; }
type p3 = MapTypes<{ iWillBeANumberOneDay: string, iWillStayTheSame: Function }, StringToNumber3> // // gives { iWillBeANumberOneDay: number, iWillStayTheSame: Function }

type MapTypes<T extends Record<any, any>, M extends { mapFrom: any, mapTo: any }> = {
  [K in keyof T]: T[K] extends M['mapFrom'] ? M['mapTo'] : T[K]
}