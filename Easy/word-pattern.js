var wordPattern = function (pattern, s) {
  s = s.split(" ");
  const patternObj = {};

  if (s.length !== pattern.length) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    if (!patternObj[pattern[i]]) {
      patternObj[pattern[i]] = s[i];
    } else {
      if (patternObj[pattern[i]] !== s[i]) {
        return false;
      }
    }
  }

  return (
    new Set(Object.values(patternObj)).size === Object.keys(patternObj).length
  );
};

// const result = wordPattern("aaaa", "dog cat cat dog");
// const result = wordPattern("abba", "dog cat cat dog");
// const result = wordPattern("abba", "dog dog dog dog");
const result = wordPattern("abba", "dog cat cat fish");

console.log("result:", result);
