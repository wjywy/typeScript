namespace A {
    // 接口也可以互相继承
    interface Shape {
        color: string
    }
    interface Square extends Shape {
        sideLength: number
    }
    let square = <Square>{}
    square.color = 'blue'
    square.sideLength = 10

    // 一个接口可以继承多个接口，创建出多个接口的继成接口
    interface shape {
        color:string
    }
    interface penstroke {
        penwidth:number
    }
    interface squ extends shape,penstroke {
        sideLength:number
    }
    let q = <squ>{}
    q.color = 'blue'
    q.sideLength = 89
    q.penwidth = 7
}
