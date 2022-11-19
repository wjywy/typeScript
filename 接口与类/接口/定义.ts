namespace A {
    // 在ts中，接口的作用是为类型命名。interface关键字不仅可以用于描述对象的结构，
    // 还可以用做接口的关键字，接口是用于隔离类或模块的实现

    // 这是一个简单示例,其中必备的参数是label，编译器在大部分情况下只会检查必备的参数是否存在
    // 并且类型检查器不会检查属性的顺序，只要相应的属性存在并且类型是对的就可以
    function printLabel(labelleddObj: {label:string}) {
        console.log(labelleddObj.label)
    }
    let myObj = {size:10,label:'size 10'}
    printLabel(myObj)

    // 使用接口重写上面的例子
    interface LabelledValue {
        label:string
    }
    function printLabel2(labelledObj: LabelledValue) {
        console.log(labelledObj.label)
    }
    let myObj2 = {size:10,label:'size 10'}
    printLabel2(myObj2)

    // 可选属性，接口中的属性不全都是必须有的，有些属性只是在某些条件下存在，或者根本不存在。如下
    interface P {
        color?: string
        width?: number
    }
    function createSquare(config: P):{color:string;area:number} {
        let newSquare = {color:"white",area:100}
        if (config.color) {
            newSquare.color = config.color
        }
        if (config.width) {
            newSquare.area = config.width * config.width
        }
        return newSquare
    }
    let mySquare = createSquare({color:"black"})

    // 只读属性，一些对象属性只能在对象刚刚创建的时候修改其值，可以在属性名前用readonly来指定只读属性
    interface read {
        readonly x: number
        readonly y: number
    }
    // 可以通过赋值一个对象字面量来构造一个point。赋值后，x和y再也不能改变了
    let p1: read = {
        x: 10,
        y: 20
    }

    // ts具有Readonly<T>类型，它与Array<T>相似，只是把所有可变方法去掉了，因此可以确保数组创建后无法被修改
    let a: number[] = [1,2,4,5]
    let ro: ReadonlyArray<number> = a  //无法再对ro这个数组进行修改
    console.log(ro)
    // 但是可以用类型断言的方式将ReadOnlyArray赋值给一个普通数组
    a = ro as number[]

    // 改用readonly还是const，最简单的判断方法是，看是将它作为变量使用还是作为一个属性。作为变量
    // 则使用const，作为属性则使用readonly

    // 额外的属性检查
    interface P {
        color?: string
        width?: number
    }
    function createSquare1(config: P):{color:string;area:number} {
        let newSquare = {color:"white",area:100}
        if (config.color) {
            newSquare.color = config.color
        }
        if (config.width) {
            newSquare.area = config.width * config.width
        }
        return newSquare
    }
    let mySquare1 = createSquare({color:"black"})  //当color与width都不存在时就会触发索引检查

    // 怎么跳过额外的属性检查,最佳方法，添加一个字符串索引签名，下面的[]就代表可以携带任意数量的属性。
    // 并且只要他们不是color和width，那么就无所谓它们的类型是什么
    interface I {
        color?: string
        width?: number
        [propName: string]: any
    }
}