// 通常意义上，我们所说的交叉类型是指将多个字典类型合并为一个新的字典类型
// 基本类型是不会存在交叉的。比如number和string是不可能有交叉点的，一个类型不可能既是字符串又是数字。
// 所以当我们使用交叉类型是通常是下面这样
// 当我们正确使用交叉类型时，它可以帮我们合理地将两个不同类型叠加为新的类型，并包含了所需的所有类型
namespace A {
    type newType = number & string
    let a: newType
    interface A {
        d: number,
        z: string,
    }

    interface B {
        f: string,
        g: string
    }

    type C = A & B
    let c: C

    // 注意：交叉类型不允许属性有交叉，李例如将上方的f换成d后就会报错，且d无论如何赋值都不可以通过类型检查

    // 如果我们需要一个变量可能是number，也有可能是string，那么我们就应该使用联合类型来解决此类问题
    // 联合类型表示一个变量可以是几种类型之一。我们用竖线分隔每个类型
    function padLeft(value: string, padding: string | number) {
        if (typeof padding === 'number') {
            return Array(padding + 1).join(" ") + value
        }
        if (typeof padding === 'string') {
            return padding + value
        }
        throw new Error(`Expected string or number ,got${padding}`)
    }
    padLeft("hello world", 4)

    // 如果一个值是联合类型，我们只能访问他们共同的属性,共同的属性不是指共同的变量名称，而是变量属性
    interface A1 {
        a: number,
        b: string,
    }
    interface B1 {
        b: string,
        c: number,
    }
    interface D1 {
        b: string,
        f: number
    }
    let object4: A1 | D1 | B1 = {
        b : '',
        f:34
    }
    console.log(object4);
}



