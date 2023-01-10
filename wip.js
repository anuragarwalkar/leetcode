/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let result = "";
    let input = s;
    const vowels = {'a': true, 'e': true, 'i': true, 'o': true, 'u': true};
    let lastChars = ""

    for(let i = 0; i < input.length; i++) {
        let addChar = input[i];

        if(vowels[input[i]]) {
            lastChars += input[i];
            addChar = input.slice(-1)
            input = input.slice(0, -1);
        }

        result += addChar;
    }

    return result + lastChars
};

// const result = reverseVowels("hello")
const result = reverseVowels("leetcode")

console.log('result:', result);