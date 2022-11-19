// 
namespace S {
    // 从对象中选取属性的子集的函数pluck，js写法
    function pluck(obj, names) {
        return names.map(name => obj[name])
    }

    // ts写法,要通过索引类型查询和索引访问操作符
    // 依靠keyof完成了类型索引。根据类型推断，第一个参数obj会被推断成Person；而第二个数组参数的类型判断
    // extends关键字让泛型K获取T，也就是T的所有属性名
    function pluck1<T, K extends keyof T>(obj: T, names: K[]): T[K][] {
        return names.map(name => obj[name])
    }

    interface Person {
        age:number;
        name:string
    }

    // ts提供了一种从旧类型中创建新类型的一种方式，也就是'映射类型'，在映射类型里，新类型以相同的形式去转换
    // 旧类型里的每一个属性。例如，你可以令每个属性成为只读类型或可选类型
    type Readonly<T> = {
        readonly [P in keyof T]: T[P];
    }
    type Partial<T> = {
        [P in keyof T]?: T[P]
    }
    type PersonPartial = Partial<Person>
    type ReadonlyPerson = Readonly<Person>
}

