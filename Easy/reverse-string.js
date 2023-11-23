/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    function swap(i, j) {
        const temp = s[i];
        s[i] = s[j];
        s[j] = temp;
    }
    let start = 0;
    let end = s.length - 1;

    while(start < end) {
        swap(start, end);
        start++
        end--;
    }   
};

reverseString(["H","a","n","n","a","h"])