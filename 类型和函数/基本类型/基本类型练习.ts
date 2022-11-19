namespace A {
    let a:number = 12
    let b:string = 'wujiayu'
    let c:number[] = [1,2,3]
    let d:Array<number> = [1,2,3]
    let e:boolean = true
    let f:any = 'wujiayu'
    f = 44
    console.log(a,b,c,d,e,f)

    // 泛型函数,如果函数类型范围值设为泛型T，则不能使用+号
    function add<T> (a: T,b: string): T {
        return a    //这时候不能将函数返回值设为b
    }
    add(34,'wujiayu')

    enum createEnum {
        weight,
        lessWeight,
        qing,
    }
    let xiaoming = createEnum.weight
    let xiaowang = createEnum.lessWeight
    let xiaohong = createEnum.qing
    console.log(xiaohong,xiaoming,xiaowang)

    // 用迭代器实现冒泡排序
    let arr: Array<number> = [10,2,1,3,5,7,9]
    for (let item = 0;item < arr.length;item++) {
        for (let it = item + 1;it < arr.length;it++ ) {
            if(arr[item]>arr[it]) {
                let temp: number = arr[item]
                arr[item] = arr[it]
                arr[it] = temp 
            }
        }
    }
    console.log(arr)

}