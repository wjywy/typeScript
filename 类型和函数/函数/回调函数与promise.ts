namespace A {
    // ts和promise,可以通过promise链推测传递的值的类型
    Promise.resolve(3333)
        .then(res => {
            return true
        })
        .then(res => {
            return 333
        })
        .then(res => {
            return false
        })
        .then(res => {
            return 4444
        })
        .catch(res => {
            return res
        })

    // 并行控制流，执行一系列的异步任务，并在所有任务完成后执行操作——使用Promise.all
    // 提供给promise.all一个包含了n个promise的数组，而promise.all返回给你一个包含了n个resolved值的数组
    function fetchUserInfo(userId: string): Promise<{}> {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({ userId })
            }, 1000)
        })
    }
    function fetchCartInfo(userId: string): Promise<{}> {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({ userId })
            }, 1200)
        })
    }
    function fetchGoodtInfo(goodId: string): Promise<{}> {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({ goodId })
            }, 1500)
        })
    }
    Promise.all([fetchUserInfo('1'), fetchGoodtInfo('2'), fetchCartInfo('233')])
        .then(
            res => {
                console.log(res);
            }
        )

    // async和await,例如：    await后面接函数.他们用一种声明的方式告诉js运行时在await关键字处
    // 暂停执行代码，等待结果返回，并在返回结果处继续执行代码
    async function fetchUser(id: string) {
        try {
            return await fetchCartInfo('1222')
        } catch (error) {
            console.log(error)
        }
    }

    // 重载:重载是静态类型语言常见的一种能力,就是函数或者方法有相同的名称,但是参数列表不相同,这样
    // 的同名不同参数的函数或者方法之间,互相称之为重载函数或者方法

    // 原生js用类型判断的方式实现重载,如下:
    function padLeft(value:string,padding:any) {
        if(typeof padding == 'number') {
            return Array(padding + 1).join(" ") + value
        }
        if(typeof padding == 'string') {
            return padding + value
        }
        throw new Error('no number no string')
    }

    // ts中的重载:基本不咋用，方式就是声明多个不同参数的padLeft函数，最后在一个类型最宽泛的版本中去实现它
    
}