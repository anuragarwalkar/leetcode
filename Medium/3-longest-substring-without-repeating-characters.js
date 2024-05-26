/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (s.length === 1 || s === "") {
      return s.length;
    }
    let longestSubstringLength = Number.MIN_SAFE_INTEGER;
  
    let pointerA = 0;
    let pointerB = 0;
  
    const charCache = {};
    while (pointerB < s.length) {
      if (charCache[s[pointerB]] != null && charCache[s[pointerB]] >= pointerA) {
        pointerA = charCache[s[pointerB]] + 1;
  
        delete charCache[s[pointerB]];
      }
  
      charCache[s[pointerB]] = pointerB;
  
      if (longestSubstringLength < pointerB - pointerA) {
        longestSubstringLength = pointerB - pointerA;
      }
  
      pointerB++;
    }
  
    return longestSubstringLength + 1;
  };
  
  console.log(lengthOfLongestSubstring("abba"));
  