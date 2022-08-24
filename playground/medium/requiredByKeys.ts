/**
 * @desc 实现一个通用的RequiredByKeys<T，K>，它接受两个类型参数T和K。
 * K指定应设置为必需的T的一组属性。当不提供K时，它应该使所有属性都是必需的，就像正常所需的＜T＞一样。
 */

interface User {
  name?: string
  age?: number
  address?: string
}

type UserRequiredName = RequiredByKeys<User, 'name'> // { name: string; age?: number; address?: string }

type RequiredByKeys<T, K extends keyof T> = Omit<T, K> & {
  [key in K]-?: T[key]
}

/**
 * @key -?  去除可选属性的?
 */

export default RequiredByKeys