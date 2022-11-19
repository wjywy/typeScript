namespace A {
    // ts也能够用接口来明确地强制一个类去符合某种契约
    interface clockInterface {
        currenttime:Date
    }
    class Clock implements clockInterface {
        currenttime: Date;
        constructor(h: number,m: number) {

        }
    }

    // 也可以在接口中描述一个方法，在类里实现它
    interface ClockTime {
        currentTime:Date
        setTime(d:Date)
    }
    class clock implements ClockTime {
        currentTime: Date;
        setTime(d: Date) {
            this.currentTime = d
        }
        constructor(h: number,m: number) {

        }
    }
    // 接口描述了类的公共部分，而不是公共和私有两部分，它不会帮你检查类是否具有某些私有成员
    
}