/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    const result = [];
    const columnLength = words[0].length;

    let wordsMap = words.reduce((acc, cur) => {
        acc[cur] = (acc[cur] ?? 0) + 1;
        return acc;
    }, {});

    for(let i = 0; i < s.length; i++) {
        let tempSet = {};
        let length = 0;

        for(let j = i; s.length; j+=columnLength) {
            const currentWord = s.slice(j, j + columnLength);

            if(length === (words.length * columnLength)) {
                result.push(i);
                break;
            }

            if(((tempSet?.[currentWord] ?? 0) + 1) <=  wordsMap?.[currentWord]) {
                length += columnLength;
                tempSet[currentWord] = (tempSet[currentWord] ?? 0) + 1;
            }else{
                break;
            }
            
        }
    }

   return result;
};

console.log(findSubstring("barfoothefoobarman", ["foo","bar"]))
console.log(findSubstring("wordgoodgoodgoodbestword", ["word","good","best","good"]))
console.log(findSubstring("barfoofoobarthefoobarman", ["bar","foo","the"]))
console.log(findSubstring("lingmindraboofooowingdingbarrwingmonkeypoundcake", ["fooo","barr","wing","ding","wing"]))