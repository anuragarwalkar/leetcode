/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
    const wordCountMap = {};
    let commonWordCount = 0;
    let commonWord;
  
    for (let word of paragraph.split(/[ ,]+/)) {
      word = word.toLowerCase().replace(/[^a-z]/g, "");
  
      if (banned.includes(word)) {
        continue;
      }
  
      const duplicateCount = wordCountMap[word] + 1 || 1;
  
      if (duplicateCount) {
        commonWordCount = Math.max(duplicateCount, commonWordCount);
  
        if (duplicateCount === commonWordCount) {
          commonWord = word;
        }
      }
  
      wordCountMap[word] = duplicateCount;
    }
  
    return commonWord;
  };
  
  const result = mostCommonWord(
      "Bob hit a ball, the hit BALL flew far after it was hit.",
    ["hit"]
  );
  
  console.log("result:", result);
  