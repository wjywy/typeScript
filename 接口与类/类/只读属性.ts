namespace A {
    // 可以使用只读属性将readonly关键字设置为只读的，只读属性必须在声明时或构造函数里进行初始化
    class octopus {
        readonly name: string
        readonly numberOflegs: number = 8
        constructor (theName: string) {
            this.name = theName
        }
    }
    let add = new octopus('i am i man')
    // add.name = 'wuwuuwuw'   //会报错，因为name是只读的
}