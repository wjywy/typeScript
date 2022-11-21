namespace A {
    // 可以创建类的静态成员，这些属性存在于类本身上面，而不是在类的实例上。每个实例想访问这个属性的时候
    // 都需要在属性前面加上类名，如同在实例属性上使用this.前缀来访问属性一样
    class Grid {
        static origin = {x: 0,y: 0}
        calculateDistance(point: {x: number;y: number}) {
            let xDist = (point.x - Grid.origin.x)
            let yDist = (point.y - Grid.origin.y)
            return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale
        }
        constructor (public scale: number) {
        }
    }
}