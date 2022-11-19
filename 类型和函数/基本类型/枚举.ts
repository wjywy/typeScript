// 数字枚举
// 如下，便通过数字来表达了订单的状态。可以直接用OrderStatus.start来代替数字1
// 技巧1：只写start = 1时，后面的枚举变量是一次递增的，当然也可以具体写出每个枚举变量的数字
// 技巧2：当第一个枚举变量的值都不写，start的值就是0
enum OrderStatus{
    start = 1,
    unpaid,
    shipping,
    shipped,
    complete,
}

// 枚举类型中的值是确定的，像下面的写法是不被允许的
// enum Exanmple {
//     A = hello(),
//     B,
// }

// 字符串枚举,由于字符串枚举没有递增的含义，所以字符串枚举成员都必须手动初始化
enum OrderString {
    start = 'start',
    unpaid = 'unpaid',
    shipping = 'shipping',
    shipped = 'shipped',
}

// 反向映射，是专属于数字枚举的一个小技巧,不是很明白呜呜呜
