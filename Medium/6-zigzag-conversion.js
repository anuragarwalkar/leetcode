/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows === 1) {
        return s;
    } 

    let result = "";

    for(let r = 0;  r < numRows; r++) {
        let increment = 2 * (numRows - 1);
        for(let i = r; i < s.length; i += increment) {
            result += s[i];

            if(r > 0 && r < numRows - 1 && i + increment - 2 * r < s.length) {
                result += s[i + increment - 2 * r];
            }
        }
    }

    return result;
   
};


console.log(convert("PAYPALISHIRING", 4))