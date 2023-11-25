var longestPalindrome = function (s) {
    let longestPalindromeStr = s[0];

    function isValidPalindrome(start, end) {
        while (start < end) {
            if (s[start] !== s[end]) {
                return false;
    
            }
            start++;
            end--;
        }

        return true;
    }

    for (let start = 0; start < s.length; start++) {
        for (let end = start + 1; end < s.length; end++) {
            if(!isValidPalindrome(start, end)) {
               continue;
            }
            const isLongest = longestPalindromeStr.length < ((end - start) + 1);
            longestPalindromeStr =  isLongest ? s.substring(start, end + 1) : longestPalindromeStr;
        }
    }

    return longestPalindromeStr;
}

var longestPalindrome = function (s) {
    let longest = "";

    function expandAroundCenter (start, end) {
        while(start >= 0 && end < s.length && s[start] === s[end]) {
            start--;
            end++;
        }

        return s.substring(start + 1, end);
    }

    for(let i = 0; i < s.length; i++) {
        const odd = expandAroundCenter(i, i);
        const even = expandAroundCenter(i, i + 1);

        if(odd.length > longest.length) {
            longest = odd;
        }

        if(even.length > longest.length) {
            longest = even;
        }
    }

    return longest;
};

console.log(longestPalindrome("babad"))