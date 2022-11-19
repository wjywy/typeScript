namespace A {
// 一个简单的字面量类型
type Profession = 'teacher'

// 通常结合联合类型使用
type Perfession1 = "tacher" | "doctor" | "accouuntant"
function personCreator(profession:Perfession1) {

}
personCreator('tacher')  //只能从三种允许的字符串中选择一种作为参数使用
}


