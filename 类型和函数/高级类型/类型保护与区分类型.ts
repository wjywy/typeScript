// 联合类型可以用于把值区分为不同的类型。当我们想确切地了解某个值的类型时该怎么办——使用类型断言
// 要实现类型保护,只需要简单地定义一个函数，但返回值必须是一个主谓宾语句
interface Teacher {
    teach():void
}
// 使用接口
interface Student {
    learn():void  
}
function getPerson(): Teacher | Student {     //联合类型
    return {} as Teacher
}
const person = getPerson()
// 在下面这个函数中，person in Teacher就是类型保护语句，说明参数必须来自于当前函数签名里面的一个参数名
function isTeacher(person:Teacher | Student): person is Teacher {
    return (<Teacher>person).teach !== undefined
}
if (isTeacher(person)) {
    person.teach()
} else {
    person.learn()
}