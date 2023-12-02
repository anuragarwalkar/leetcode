/**
 * @param {number[]} nums
 * @return {number}
 */
// var singleNumber = function (nums) {
//     const cache = {};
//     let number = null;

//     for (let num of nums) {
//         cache[num] = (cache[num] ?? 0) + 1;

//     }

//     for (let char in cache) {
//         if (cache[char] === 1) {
//             number = char;
//         }
//     }

//     return number;
// }; 

var singleNumber = function (nums) {
    const numSet = new Set(); 

    for(const num of nums) {
        if(numSet.has(num)) {
            numSet.delete(num);
        }else{
            numSet.add(num);
        }

    }

    const [number] = numSet;

    return number;
}; 



console.log(singleNumber([4, 1, 2, 1, 2]));