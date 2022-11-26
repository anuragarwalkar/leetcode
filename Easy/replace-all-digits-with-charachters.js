var replaceDigits = function (s) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    const number = parseInt(s[i]);

    if (isNaN(number)) {
      result += s[i];
    } else {
      result += String.fromCharCode(s.charCodeAt(i - 1) + number);
    }
  }

  return result;
};

const result = replaceDigits("a1c1e1");

console.log("result:", result);
