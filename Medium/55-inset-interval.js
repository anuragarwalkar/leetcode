/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    const result = [];
    for(let i = 0; i < intervals.length; i++) {
        const [newStart, newEnd] = newInterval;
        const [start, end] = intervals[i];

        if(newEnd < start) {
            result.push(newInterval);
            result.push(...intervals.slice(i))
            return result;
        }else if(newStart > end) {
            result.push(intervals[i]);
        }else {
            newInterval = [Math.min(newStart, start), Math.max(newEnd, end)];
        }
    }

    result.push(newInterval);

    return result
};

// console.log(insert([[1,5]], [6,8]))
// console.log(insert([[1,5]], [0,3]))
// console.log(insert([[1,3],[6,9]], [0,0]))
// console.log(insert([[1,3],[6,9]], [10,15]))
// console.log(insert([[1,3],[6,9]], [2,5]))
console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8])) // [ [ 1, 2 ], [ 3, 5 ], [ 4, 8 ], [ 6, 7 ], [ 8, 10 ], [ 12, 16 ] ]