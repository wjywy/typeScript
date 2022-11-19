// 使用symbol类型，通过symbol构造函数创建
const symbol1 = Symbol()
const symbol2 = Symbol('hello')
const symbol3 = Symbol('hello')
// symbol2 == symbol3   //返回false，因为symbol类型是唯一的

// 像字符串一样，symbol也可以用于对象属性的键
const symbol = Symbol()
const obj = {
    [symbol ]: 'value'
}
console.log(obj[symbol])   //'value'



