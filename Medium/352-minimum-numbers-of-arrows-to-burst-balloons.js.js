/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    
    points.sort((a, b) => {
        return a[0] - b[0]
    })


    let result = [points[0]];

    for(let i = 1; i < points.length; i++) {
        const [prevStart, prevEnd] = result[result.length - 1];
        const [start, end] = points[i];

        if(prevEnd >= start) {
            result[result.length - 1] = [Math.max(start, prevStart), Math.min(end, prevEnd)]
        }else {
            result.push(points[i]);
        }
    }

    return result.length;
};

// console.log(findMinArrowShots([[10,16],[2,8],[1,6],[7,12]]));
console.log(findMinArrowShots([[1,2],[2,3],[3,4],[4,5]]));