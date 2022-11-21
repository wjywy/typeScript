namespace A {
    // ts支持通过getter/setters来截取对对象成员的访问，这可以有效地控制如何访问对象成员

    // 示例：将一个简单的类改写成使用get和set方法
    class Employee {
        fullName: string     //假如没有下面的初始化就会报错，因为可能这个string会变成undefined
        constructor() {
            this.fullName = ''
        }
    }
    let employee = new Employee()
    employee.fullName = "bob smith"
    if(employee.fullName) {
        console.log(employee.fullName)
    }

    // 改写：
    let passcode = 'secret passcode'
    class Employee1 {
        private _fullname: string
        constructor() {
            this._fullname = ''
        }
        get fullName(): string {
            return this._fullname
        }
        set fullName(newName: string) {
            if (passcode && passcode == "secret passcode") {
                this._fullname = newName
            } else {
                console.log('error')
            }
        }
    }
    let employee1 = new Employee1()
    employee1.fullName = 'bob smith'
    if (employee1.fullName) {
        console.log(employee1.fullName)
    }
}

