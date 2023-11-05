

var TimeLimitedCache = function() {
    this.map = {};
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    let status = !!this.map[key];
    this.map[key] = { startTime: new Date().getTime(), value, duration };
    return status;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    if(!this.map[key]) {
        return -1;
    }

    const { startTime, value, duration } = this.map[key];
    const timeDiff = new Date().getTime() - startTime;

    if(timeDiff > duration) {
        return -1;
    }

    return value;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    let counter = 0;
    for(let item in this.map) {
        const { startTime, duration } =  this.map[item];
        const timeDiff = new Date().getTime() - startTime;

        if(timeDiff <= duration) {
            counter++;
        }
    }

    return counter;
};

const timeLimitedCache = new TimeLimitedCache()
console.log(timeLimitedCache.set(1, 42, 1000)); // false
console.log(timeLimitedCache.get(1)) // 42
console.log(timeLimitedCache.count())
setTimeout(() => {
    console.log(timeLimitedCache.get(1)) // 42
    console.log(timeLimitedCache.count())
}, 3000);
timeLimitedCache.count() // 1

