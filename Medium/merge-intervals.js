/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    
    const result = [intervals[0]];

    for(let i = 1; i < intervals.length; i++) {
        const [start, end] = intervals[i];
        const [_, prevEnd] =  result[result.length-1];

        if(prevEnd >= start) {
            result[result.length-1][1] =  Math.max(end, prevEnd)
        }else {
            result.push([start, end]);
        }
    }

    return result;
};

console.log(merge([[1,3],[15,18], [2,6],[8,10],]))