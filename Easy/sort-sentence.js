/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
  s = s.split(" ");
  const finalStr = [];

  for (let i = 0; i < s.length; i++) {
    const str = s[i].slice(0, -1);
    finalStr[s[i].slice(-1) - 1] = str;
  }

  return finalStr.join(" ");
};

const res = sortSentence("is2 sentence4 This1 a3");

console.log("res:", res);
