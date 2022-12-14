/**
 * @param {string[]} words
 * @return {string[]}
 */
 var findWords = function (words) {
    const rowCharMapper = {
      q: 0,
      w: 0,
      e: 0,
      r: 0,
      t: 0,
      y: 0,
      u: 0,
      i: 0,
      o: 0,
      p: 0,
      a: 1,
      s: 1,
      d: 1,
      f: 1,
      g: 1,
      h: 1,
      j: 1,
      k: 1,
      l: 1,
      z: 2,
      x: 2,
      c: 2,
      v: 2,
      b: 2,
      n: 2,
      m: 2,
    };
  
    const result = [];
  
    for (let word of words) {
      let initialCharRow = null;
      let allCharSameRow = true;
  
      for (let i = 0; i < word.length; i++) {
        const rowNumber = rowCharMapper[word[i].toLowerCase()];
  
        if (initialCharRow != null && rowNumber !== initialCharRow) {
          allCharSameRow = false;
          break;
        }
  
        if (initialCharRow === null) {
          initialCharRow = rowNumber;
        }
      }
  
      if (allCharSameRow) {
        result.push(word);
      }
    }
  
    return result;
  };
  
  console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]));
  