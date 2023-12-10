// /**
//  * @param {string} s
//  * @return {string}
//  */
var reverseWords = function (s) {
    const result = [];
    let word = "";

    for (let i = 0; i <= s.length; i++) {
        if (s[i] && s[i] !== ' ') {
            word += s[i];
        } else {
           !!word && result.push(word);
            word = "";
        }
    }

    let resultingString = " ";

    for(let i = result.length - 1; i >= 0; i--) {
        resultingString += result[i];

        if(i !== 0) {
            resultingString += " "; 
        } 
    }

    return resultingString;
};

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let result = "";
    let end = null;
    let start = null

    for (let i = s.length - 1; i >= -1; i--) {
        if (s[i] && s[i] !== ' ') {
           if(!end) {
            end = i;
           }
        } else {
            start = i + 1;
            if(end !== null) {
                result += s.slice(start, end + 1);
                i > 0 && (result += " ");
            }
            end = null;
        }
    }

    if(result[result.length-1] === " ") {
        result = result.slice(0, -1)
    }

    return result;
};


// console.log(reverseWords("  hello world  "))
console.log(reverseWords("a good   example"))
