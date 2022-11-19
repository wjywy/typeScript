//  用联合类型书写padLeft代码
namespace C {
    function isNumber(padding: number | string): padding is number {
        return typeof padding === 'number'
    }
}

// typeof在ts中使用时，只能匹配基本类型时，才会启用类型保护。
// 除了typeof，instanceof也可以起到类型保护的作用，相比于typeof，其类型保护更为精细，
// 是通过构造函数来区分类型的一种方式
