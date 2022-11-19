// 不使用泛型
function hello(arg: number) {
    return arg
}

// 使用泛型,T代表用户即将传入的类型，在最后使用T作为函数的返回值的类型。这就达到了返回值和参数类型相同的目的
function hello1<T>(arg: T): T {
    return arg
}

// 两种使用泛型函数的方法
let output = hello1<string>('hello ts')  //使用熟悉的尖括号表达式进行表达
let output1 = hello1('hello ts')  //使用类型推断

// 泛型变量,当我们使用hello1函数的arg参数的长度时，由于参数可能是number类型而没有长度会报错，怎么解决呢
function hello2<T>(arg: T[]): T[] {  //解决方法，传入一个T的数组
    console.log(arg.length)
    return arg
}
function hello3<T>(arg: Array<T>): Array<T> {  //不使用[],使用Array来表达数组
    console.log(arg.length)
    return arg
}