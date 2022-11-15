/**
 * @desc 有时我们想限制数字的范围…例如。
 */

type NR = NumberRange<2, 9> //  | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 

type NumberRange<
  Start extends number,
  End extends number,
  Count extends number[] = [],
  R extends number[] = [],
  IsStart extends boolean = Count['length'] extends Start ? true : false
> = Count['length'] extends End ?
  [...R, End][number] : IsStart extends true ? NumberRange<Start, End, [...Count, 0], [...R, Count['length']], IsStart> :
  Count['length'] extends Start ? NumberRange<Start, End, [...Count, 2], [Start], true> : NumberRange<Start, End, [...Count, 444], R>
