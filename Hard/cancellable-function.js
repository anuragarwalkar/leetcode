/**
 * @param {Generator} generator
 * @return {[Function, Promise]}
 */
var cancellable = function (generator) {
    let isCancelled = false;

    let cancel = () => {
        isCancelled = true;
    };

    const promise = new Promise(async (resolve, reject) => {
        try {
            let next = generator.next();

        while(!next.done){
            try {
                let nextValue = await next.value;
                next = isCancelled ? generator.throw("Cancelled") : generator.next(nextValue);
            } catch (e) {
                next = generator.throw(e);
            }
        }

        resolve(next.value); 
        } catch (error) {
            reject(error);
        }
       
    });

    return [cancel, promise];
};

// function* tasks() { return 42; }
// function* tasks() { try { yield new Promise((resolve, reject) => reject("Promise Rejected")); } catch (e) { let a = yield new Promise(resolve => resolve(2)); let b = yield new Promise(resolve => resolve(2)); return a + b; }; }
function* tasks() { const msg = yield new Promise(res => res("Hello")); throw `Error: ${msg}`; }
// function* tasks() { yield new Promise((resolve, reject) => reject("Promise Rejected")); }

const [cancel, promise] = cancellable(tasks());


promise.then(res => {
    console.log('res:', res);
}).catch(res => {
    console.log('res:', res);
})