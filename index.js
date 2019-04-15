
class Measure {
    constructor(fn1, fn2){
        this.fn1 = fn1;
        this.fn2 = fn2;
        this.start = Date.now();
        this.total = Date.now();
    }

    init(){
        this.start = Date.now();
    }

    async runSequential() {
        this.start = Date.now();
        await this.fn1();
        console.log( `${this.fn1.name} -- Time elapsed: ${Date.now() - this.start}`)

        this.start = Date.now();
        await this.fn2();
        console.log( `${this.fn2.name} -- Time elapsed: ${Date.now() - this.start}`)
    }

    runParrallel(){
        return Promise.all([this.fn1(), this.fn2()])
    }
    
    async run(){
        await this.runSequential()
        console.log( `TOTAL Sequential exec: ${Date.now() - this.total}`)
        console.log( `- - -`)

        this.total = Date.now();
        await this.runParrallel()
        console.log( `TOTAL parrallel exec: ${Date.now() - this.total}`)

    }
}


let slowAsyncFunc = _ => {
    return new Promise(resolve => {
         setTimeout( function() {
             resolve();
        }, 2500)
    }
)}

let fastAsyncFunc = _ => {
    return new Promise(resolve => {
         setTimeout( function() {
             resolve();
        }, 1500)
    }
)}


let measure = new Measure(slowAsyncFunc, fastAsyncFunc)
measure.run()









