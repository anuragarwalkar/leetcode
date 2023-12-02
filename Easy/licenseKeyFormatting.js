/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function (s, k) {
    let result = "";
    let counter = 0;
    let tempWord = s.replace(/-/g, "");
  
    let initialLength = tempWord.length % k;
  
    for (let i = 0; i < tempWord.length; i++) {
      if(initialLength && initialLength === counter) {
          result += "-";
          initialLength = 0;
          counter = 0;
      }else if (counter === k) {
        result += "-";
        counter = 0;
      }
  
      result += tempWord[i].toUpperCase();
      counter++;
    }
  
    return result;
  };
  
  const result = licenseKeyFormatting("2-4A0r7-4k", 3);
  
  console.log("result:", result);
  