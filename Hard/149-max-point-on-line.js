function maxPoints(points) {
    if(points.length <= 2) return points.length;
 
     let maxPoints = 0;
 
    for(let i = 0; i < points.length; i++) {
     const [x1, y1] = points[i];
 
     for(let j = i + 1; j < points.length; j++) {
         let count = 2;
         
         const [x2, y2] = points[j];
 
         const slope = (y2 - y1) / (x2 - x1);
 
         for(let k = 0; k < points.length; k++) {
           if(k !== i && k !== j) {
             const [x3, y3] = points[k];
 
             if((y3 - y2 ) / (x3 - x2) === slope) {
                 count++;
             }
           }
 
         }
 
         maxPoints = Math.max(maxPoints, count);
     }
    }
 
    return maxPoints;
 }
 
 // Example usage:
 const points = [[1,1],[2,2],[3,3],[4,1],[5,1],[6,1]];
 console.log(maxPoints(points)); // Output should be 4
 
 
 maxPoints([[1,1],[2,2],[3,3]])


 /**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
    let res = 1;
  
    for (let i = 0; i < points.length; i++) {
        const count = new Map();
        const point1 = points[i];
        for (let j = i + 1; j < points.length; j++) {
            const point2 = points[j];
            let slope;
            if (point2[0] === point1[0]) {
                slope = Number.MAX_SAFE_INTEGER;
            } else {
                slope = (point2[1] - point1[1]) / (point2[0] - point1[0]);
            }
            !count.has(slope)
                ? count.set(slope, 2)
                : count.set(slope, count.get(slope) + 1);
  
            res = Math.max(res, count.get(slope));
        }
    }
    console.log('res:', res)
    return res;
  };
  
  // maxPoints([[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]);
  // maxPoints([[1,2],[2,2],[3,2],[4,2]]);
  maxPoints([[1,0],[0,0],[4,0],[-2,0],[-1,0],[3,0],[-4,0]]);
  // maxPoints([[0,1],[0,0],[0,4],[0,-2],[0,-1],[0,3],[0,-4]]