namespace A {
    // 定义函数
    function add1(x: number, y: number): number {
        return x + y
    }
    const add = function(x:number,y:number) {
        return x+y
    }

    // 给一个变量赋值一个函数类型
    let add2: (x:number,y:number) => number
}
