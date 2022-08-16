/**
 * @desc 在类型系统里实现 JavaScript 的 Array.includes 方法，这个类型接受两个参数，返回的类型要么是 true 要么是 false。
 */

type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Wamuu1'> // expected to be `false`

type Includes<T extends unknown[], K> = K extends T[number] ? true : false
// 暂时不懂啥意思 type Includes<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y
//   ? 1
//   : 2
//   ? true
//   : false;

let d: isPillarMen = false

export default Includes