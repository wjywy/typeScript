namespace A {
    // ts中的每个函数的参数都必须有值，如果允许，也可以传入undefined或者null值，但是参数必须一一对应，站住坑
    // 可选参数必须跟在必选参数的后面
    function buildName(firstName?: string, lastName?: string) {
        return firstName + " " + lastName
    }
    let name1 = buildName("barack")

    // 可以创建默认参数，当用户没有传递这个参数或者传递的值是undefined时，则称为有默认初始化值的参数
    // 默认参数与可选参数一样，是可以省略的，不同的是，省略后会有一个默认值提供给函数使用
    // 还有一点不同，带默认值的参数不需要放在参数的最后面，它可以在任何位置，但是如果不在最后面
    // 就需要使用undefined或者null来占位置

    // 剩余参数：...
    function buildName1(firstName:string,...names:string[]) {
        return firstName + " " + names.join(" ")
    }
    buildName1("brack","hussein","obama","II")
}

