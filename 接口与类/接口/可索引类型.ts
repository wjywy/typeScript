namespace A {
    // 与使用接口描述函数类型差不多，我们也可以描述哪些能够"通过索引得到"的类型，例如a[10]或ageMap["daniel"]
    // 可索引类型具有一个“索引签名”，描述了对象索引的类型，还有相应的索引返回值类型。
    interface stringArray {
        [index: number]: string
    }
    let myArray: stringArray
    myArray = ['bob','fred']
    let mystr: string = myArray[0]
    console.log(mystr)
    // 其中共有两种索引类型：string和number.可以同时使用者两种类型的索引，但是数字索引的返回值必须是
    // 字符串索引返回值类型的子类型，。这是因为当使用number来索引时，js会将它转换成string然后才去
    // 索引对象。
    class Animal {
        name:string
    }
    class Dog extends Animal {
        breed:string
    }
    interface Notokay {
        // [x: string]: Animal  //如果这个类型为number就会报错
        [x: string]: Dog
    }

    // 字符串索引类型能够确保所有属与其返回值类型相匹配。因为字符串索引类型声明了obj.property和
    // obj["property"]两种类型都可以。
    interface nu {
        [index: string]: number
        length: number
        name: number    //当类型与字符串索引类型不匹配时就会报错,比如为string的时候
    }

    // 可以将索引签名设置为只读，这样可以防止给索引赋值
    interface read {
        readonly [index: number]: string
    }
    let my: read = ['alice','bob']
    // my[2] = 'mallory'   //只允许读取，不允许赋值
}