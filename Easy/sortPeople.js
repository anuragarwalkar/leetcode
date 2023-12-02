/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    const mergedArray = heights.map((e, i) => ({name: names[i], height: e}))
    return mergedArray.sort((a, b) => {
        return b.height - a.height
    }).map(e => e.name);  
};

const result = sortPeople(["Mary","John","Emma"], [180,165,170])

console.log('result:', result);