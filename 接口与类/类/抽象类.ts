namespace A {
    // 抽象类一般作为其他派生类的基类使用，不会直接被实例化。不同于接口，可以包含成员的实现细节。abstract
    // 关键字是用于定义抽象类和在抽象类内部定义抽象方法
    abstract class Animal {
        abstract makeSound(): void
        move(): void {
            console.log('earch')
        }
    }
    // 抽象类中的方法不包含具体实现并且必须在派生类中实现。抽象方法的语法与接口方法相似。两者都是
    // 定义方法签名但不包括方法体。然而，抽象方法必须包含abstract关键字，并且可以包含访问修饰符
    
}
