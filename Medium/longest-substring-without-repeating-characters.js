/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let longestRepeatingCharCount = 0;

    for(let i = 0; i < s.length; i++) {
        const uniqueCharacters = {};
        let uniqueChars = 0;
        
        for(let j = i; j < s.length; j++) {
            if(uniqueCharacters[s[j]]) {
                break;
            }
            uniqueCharacters[s[j]] = true
            uniqueChars++;
            longestRepeatingCharCount = Math.max(uniqueChars, longestRepeatingCharCount);
        }
    }

    return longestRepeatingCharCount;
};

var lengthOfLongestSubstring = function(s) {
    let left = 0;
    let seenBefore = {};
    let longestSubstringLength = 0;

    for(let right = 0; right < s.length; right++) {
        const currentChar = s[right];
        const seenBeforeIndex = seenBefore[currentChar];
        
        if(seenBeforeIndex >= left) {
            left = seenBeforeIndex + 1;
        }   

        seenBefore[currentChar] = right;

        longestSubstringLength = Math.max(longestSubstringLength, right - left + 1);
    }

    return longestSubstringLength;
};

console.log(lengthOfLongestSubstring("abba"));