namespace A {
    // 定义接口并实现嵌套接口
    interface parentItem {
        name:string
        age:number
    }

    interface childrenItem {
        name:string
        age:number
    }

    interface parents {
        [index:number]: parentItem
    }

    interface children {
        [index:number]: childrenItem
    }

    interface data {     //总数据
        name:string
        parents?:parents
        children?:children
    }
}