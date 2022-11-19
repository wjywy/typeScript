namespace P {
    // 接口可以描述js中对象拥有的各种各样外形。除了描述带有属性的普通对象外，接口也可以描述函数类型
    // 为了使用接口表示函数类型，我们需要给接口定义一个调用签名，就像是一个只有参数列表和返回值类型
    // 的函数定义。参数列表里的每个参数都需要名字和类型
    interface searchFunc {
        (source: string, subString: string): boolean
    }
    // 这样定义之后，我们就可以像使用其他接口一样使用这个函数类型的接口。下例展示了如何创建一个函数类型
    // 的变量，并将一个同类型的函数赋值给这个变量
    let mySeaech: searchFunc
    mySeaech = function (source:string,subString:string) {
        let result = source.search(subString)
        return result > -1
    }
    // 对于函数类型的检查来说，函数的参数名不需要与接口里定义的名字相匹配。
    let mySearch1: searchFunc
    mySearch1 = function(src: string,sub: string) {
        let result = src.search(sub)
        return result > -1
    }
    // 类型检查器会对函数的参数逐个进行检查，要求对应位置上的参数类型是兼容的。
    // 在这里的函数的返回值类型是通过其返回值推断出来的(此例是false和true)。
}

