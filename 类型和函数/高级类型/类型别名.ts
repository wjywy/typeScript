namespace D {
    // 类型别名就是可以给一个类型起一个新名字
    // 在ts中，我们使用type关键字来描述类型变量
    type Age = number
    type AgeCreator = () => Age
    function getAge(arg: AgeCreator): Age {
        return arg()
    }

    // 类型别名也可以是泛型
    type Person<T> = { age: T }

    // 也可以使用类型别名在属性里引用自己
    type Person1<T> = {
        name: T;
        mother: Person1<T>;
        father: Person1<T>
    }
}
