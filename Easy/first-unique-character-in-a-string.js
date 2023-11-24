/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    const charactersMap = {};

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        const value = charactersMap[char] || { index: i, count: 1 }

        if (charactersMap[char]) {
            value.count++;
        }else {
            charactersMap[char] = value;
        }

    }


    for (let charValue in charactersMap) {
        const { index, count } = charactersMap[charValue];
        if (count === 1) {
            return index;
        }
    }

    return -1;
};

console.log(firstUniqChar("leetcode"))