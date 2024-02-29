/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    const generateMap = t.split('').reduce((acc, cur) => {
        acc[cur] = (acc[cur] ?? 0) + 1
        return acc;
    }, {});

    const result = [];
    let minSubStr = s;

    for(let i = 0; i < s.length; i++) {
        const temp = {};
        let substr = "";
        let targetWordLength = 0;

        for(let j = i; j < s.length; j++) {
          substr += s[j];

          if(targetWordLength === t.length) {

            if(substr.length < minSubStr.length) {
                minSubStr = substr;
            }
              result.push(substr);
              substr = null;
            break;
          }

          if((temp[s[j]] ?? 0 + 1) <= generateMap[s[j]]) {
            temp[s[j]] =  (temp[s[j]] ?? 0) + 1;
            targetWordLength++;
          }
        }

        if(targetWordLength === t.length && substr) {
            if(substr.length < minSubStr.length) {
                minSubStr = substr;
            }
            result.push(substr);
        }

    }

    return minSubStr
};

console.log(minWindow("ADOBECODEBANC", "ABC"))