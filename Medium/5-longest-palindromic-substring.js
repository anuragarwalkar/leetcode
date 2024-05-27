var longestPalindrome = function (s) {
    function expandAroundCenter(start, end) {
      while (start >= 0 && end < s.length && s[start] === s[end]) {
        start--;
        end++;
      }
      return s.slice(start + 1, end);
    }
  
    let longestSubstring = s[0];
  
    for (let i = 0; i < s.length; i++) {
      let odd = expandAroundCenter(i, i);
      let even = expandAroundCenter(i, i + 1);
  
      if (odd.length > longestSubstring.length) {
        longestSubstring = odd;
      }
  
      if (even.length > longestSubstring.length) {
        longestSubstring = even;
      }
    }
  
    return longestSubstring;
  };
  
  console.log(longestPalindrome("babad"));
  