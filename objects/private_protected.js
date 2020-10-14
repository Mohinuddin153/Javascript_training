class Example {
    #x  //private declaration
    constructor() {
        this.#x = 42
    }
    show() {
        console.log(this.#x)
    }
}

const ex = new Example()
ex.show()
// console.log(ex.#x)-- throws error

class Example2 {
    _x  //protected declaration
    constructor() {
        this._x = 42
    }
    show() {
        console.log(this._x)
    }
}

const ex2 = new Example2()
console.log(ex2._x)
ex2.show()