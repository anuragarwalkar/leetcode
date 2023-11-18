/**
//  * @param {string} s
//  * @return {boolean}
//  */
// var isPalindrome = function(s) {

//     let start = 0;
//     let end = s.length - 1;

//     while(start < end) {
//        const regex = new RegExp('[a-zA-Z0-9]+$');
//        const startChar = regex.test(s[start]);
//        const endChar = regex.test(s[end]);

//        if(!startChar) {
//         start++;
//        }

//        if(!endChar) {
//         end--;
//        }

//        const startEndSasme = (s[start].toLowerCase() === s[end].toLowerCase());

//        if(startChar && endChar && !startEndSasme) {
//         return false;
//        }else if(startEndSasme) {
//         start++;
//         end--;
//        }
//     }


//     return true;
// };


/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let validString = "";

    for (const char of s) {
        if(new RegExp('[a-zA-Z0-9]+$').test(char)) {
            validString += char.toLowerCase();
        }
    }

    let start = 0;
    let end = validString.length - 1;

    while(start < end) {
       if(validString[start] !== validString[end]) {
        return false;
       } 

       start++;
       end--;
    }


    return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))