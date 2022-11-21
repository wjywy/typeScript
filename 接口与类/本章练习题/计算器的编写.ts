namespace A {
    interface cal  {
        firstCount: number
        secondCount: number
    }
    class calculator implements cal {
        firstCount: number;
        secondCount: number
        constructor(one: number,two: number) {
            this.firstCount = one
            this.secondCount = two
        }
    }
    class add extends calculator {
        add(): number {
            return this.firstCount + this.secondCount
        }
    }
    let addCount = new add(3,4)
    console.log(addCount.add())
    class jian extends calculator {
        delete(): number {
            return this.firstCount - this.secondCount
        }
    }
    let deleteCount = new jian(5,3)
    console.log(deleteCount.delete())
}