/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
    const result = [];
    let subArray = []

    for (let i = 0, j = 0; i < arr.length; i++) {
        if(j === size) {
            result.push(subArray);
            subArray = []
            j = 0;
        }

        if(j <= size) {
            subArray.push(arr[i]);
            j++;
        }
        
    }

    if(subArray.length) {
        result.push(subArray);
    }

    return result;
};

const result = chunk([1, 2, 3, 4, 5], 6)

console.log('result:', result);