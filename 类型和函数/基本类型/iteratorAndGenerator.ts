// iterator
// 当一个对象实现了Symbol.iterator时，我们认为它是可迭代的.对象上的Symbol.iterator函数负责返回供迭代的值
// for...of语句会遍历可迭代的对象，调用对象上的Symbol.iterator方法
const array = [233,'hello',true]
for (let value of array) {
    console.log(value)  //233，'hello',true
}

// for...of和for...in都可以迭代一个数组，但它们之间的区别很大。for...in迭代的是对象的键，而for...of迭代的
// 是对象的值


// generator   不是很懂，记得回头来弄弄清楚
// function*是用来创建generator函数的语法。调用generator函数时会1返回一个generator对象。generator
// 对象会遵循迭代器接口，即通常所见到的next、return、throw函数

// generator用于创建懒迭代器，例如下面的这个函数可以返回一个无限整数的列表
// function* infiniteList() {
//     let i = 0
//     while(true) {
//         yield i++
//     }
// }
// let iterator = infiniteList()
// while(true) {
//     console.log(iterator.next())
// }

// 也可以设定某个条件终止它，而不只是永远循环下去。gerator实质上允许一个函数可以暂停执行，比如我们执行了
// 第一次的gen.next()后，可以先去做别的事情，再回来继续执行gen.next()，这样剩余函数的控制权就交给了调用者
function* infinite() {
    let i = 0
    while(i < 3) {
        yield i++
    }
}
let gen = infinite()
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())

// 1.generator对象只会在调用next时开始执行
// 2.函数在执行到yeild语句时会暂停并返回yeild的值
// 3.函数在next被调用时继续恢复执行


