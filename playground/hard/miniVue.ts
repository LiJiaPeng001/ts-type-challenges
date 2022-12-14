/**
 * @desc 实现类似Vue的类型支持的简化版本。
        通过提供一个函数SimpleVue（类似于Vue.extend或defineComponent），它应该正确地推断出 computed 和 methods 内部的this类型。
        在此挑战中，我们假设SimpleVue接受只带有data，computed和methods字段的Object作为其唯一的参数，
        data是一个简单的函数，它返回一个提供上下文this的对象，但是你无法在data中获取其他的计算属性或方法。
        computed是将this作为上下文的函数的对象，进行一些计算并返回结果。在上下文中应暴露计算出的值而不是函数。
        methods是函数的对象，其上下文也为this。函数中可以访问data，computed以及其他methods中的暴露的字段。 computed与methods的不同之处在于methods在上下文中按原样暴露为函数。
        SimpleVue的返回值类型可以是任意的。
 */

// SimpleVue 接受的参数是一个对象，也就是 data、computed、methods 这些，这题写的就是这些方法的类型
// 那么我们根据泛型来接受它的参数，再通过题目的意思一一返回
// Data 返回一个提供上下文 this 的对象
// computed 返回 this 作为上下文的函数的对象，进行一些计算并返回结果，因此需要返回 computed 和 This，ThisType 是内置的方法
// methods 可以访问其他几个字段

const instance = SimpleVue({
  data() {
    return {
      firstname: 'Type',
      lastname: 'Challenges',
      amount: 10,
    }
  },
  computed: {
    fullname() {
      return this.firstname + ' ' + this.lastname
    }
  },
  methods: {
    hi() {
      alert(this.fullname.toLowerCase())
    }
  }
})

type GetThisValue<T> = {
  [K in keyof T]: T[K] extends () => infer A ? A : never
}

type VueOption<Data, Computed, Methods> = {
  data: () => Data,
  computed: Computed & ThisType<Data>,
  methods: Methods & ThisType<Data & GetThisValue<Computed> & GetThisValue<Methods>>
}


declare function SimpleVue<Data, Computed, Methods>(options: VueOption<Data, Computed, Methods>): void