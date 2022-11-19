namespace A {
    // 在ts中，我们可以使用继承来扩展现有的类,派生类通常称为子类，基类通常称为超类
    class Animal {
        move(dsitance?: number) {
            console.log(`animal moved ${dsitance}`)
        }
    }
    class dog extends Animal {
        bark() {
            console.log('wuwuwu')
        }
    }
    const Dog = new dog()
    Dog.move(10)
    Dog.bark()

    // 更加复杂的例子
    class Animal1 {
        name:string
        constructor(theName: string) {
            this.name = theName
        }
        move(distanceInMeters: number = 0) {
            console.log(`${this.name} moved ${distanceInMeters}`)
        }
    }
    class Snake extends Animal1 {
        constructor(name: string) {
            super(name)
        }
        move(distanceInMeters = 5) {
            console.log("gol......")
            super.move(distanceInMeters)
        }
    }
    class Horse extends Animal1 {
        constructor(name: string) {
            super(name)
        }
        move(distanceInMeters = 45) {
            console.log('gall')
            super.move(distanceInMeters)
        }
    }
    let sam = new Snake('python')
    let tom: Animal = new Horse('palo')
    sam.move()
    tom.move(34)
    // 派生类包含了一个构造函数，它必须调用super(),并会执行基类的构造函数。而且，在构造函数里访问
    // this的属性之前一定要调用super()。
    // 上面的Snake和Horse类都创建了move方法，它们重写了从animal继承来的move方法，使得move方法
    // 根据不同的类而具有不同的功能。注意：即使tom被声明为Animal类型，但因为它的值是Horse，调用
    // tom.move(34)时，它会调用Horse里重写的方法
}
