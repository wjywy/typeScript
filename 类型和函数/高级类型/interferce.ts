// 高级类型属于ts独有
interface A {
    a: number,
    b: string,
    c: number[]
}
let unique: A = {
    a: 12,
    b:'wujiayu',
    c:[1,2,3],
}
console.log(unique)
function handleInterface (config:A): {age:number;name:string;arr:number[]} {
    let newConfig = {age:12,name:'wujiayu',arr:[2,3,4]}
    if(config.c) {
        newConfig.age = config.a 
    }
    return newConfig
}