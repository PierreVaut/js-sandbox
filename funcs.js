const anotherAyncFunc = (cb) => {
    return new Promise(_ => {
        setTimeout( function() {
            console.log("Resolve the slow async function! ");
            cb()
        }, 5000)
    }
)}


const sequentialExecution = async () => {
    await someAsyncFunc();
    await anotherAyncFunc();
}

const concurrentExecutionWithPromiseAll = function() {
    return Promise.all([someAsyncFunc(), anotherAyncFunc()])
  }

const parallelExecutionWithPromiseAll = function() {
    return Promise.all([
        (async _ => (await someAsyncFunc()))(),
        (async _ => (await anotherAyncFunc()))()
    ]);
}

const letsHaveFunWithAsyncFunctions = _ => {
    console.log("== sequentialExecution ==")
    measure(sequentialExecution)
    
/*     console.log("== concurrentExecutionWithPromiseAll ==")
    measure( concurrentExecutionWithPromiseAll);
    
    console.log('==PARALLEL with await Promise.all==');
    measure( parallelExecutionWithPromiseAll ); */
}

// letsHaveFunWithAsyncFunctions()