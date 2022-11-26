var lengthOfLastWord = function (s) {
  let wordLength = 0;

  for (let i = 0; i < s.length; i++) {
    const currentElement = s[i];
    const previousElement = s[i - 1];

    if (previousElement === " " && currentElement != " ") {
      wordLength = 0;
    }

    if (currentElement != " ") {
      wordLength++;
    }
  }

  return wordLength;
};

const result = lengthOfLastWord("   fly me   to   the moon  ");

console.log("result:", result);
