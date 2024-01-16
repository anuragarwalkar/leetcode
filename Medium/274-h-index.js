/**
 * @param {number[]} citations
 * @return {number}
 */
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
    if(citations.length === 1 && citations[0] > 0) return 1;

    citations = citations?.sort((a, b) => a - b);

    let hIndex = -Infinity;

    for (let i = 0; i < citations.length; i++) {
        if(citations.length - i >= citations[i]) {
            hIndex = Math.max(hIndex, citations[i]);
        }else {
            hIndex = Math.max(hIndex, citations.length - i)
        }
    }
    return hIndex == -Infinity ? citations?.length : hIndex;
};

/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    citations.sort((a, b) => b - a);

    for(let i = 0; i < citations.length; i++) {
      if(citations[i] >= i+1) {
        console.log(citations[i], i + 1)
        continue
      }else {
        return i;
      }
    } 
    
    return citations.length;
};

// console.log(hIndex([100, 2, 1]))
// console.log(hIndex([1,1,1,1,1,1,1]))
// console.log(hIndex([4,4,0,0]))
// console.log(hIndex([1,8,9,10,3]))