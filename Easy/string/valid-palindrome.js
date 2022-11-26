function solve(s) {
  s = s.match(/[a-z]/gi).join("");
  let start = 0;
  let end = s.length - 1;
  while (start <= end) {
    if (s[start].toLowerCase() === s[end].toLowerCase()) {
      start++;
      end--;
    } else {
      return false;
    }
  }

  return true;
}

function solve(s) {
  let start = 0;
  let end = s.length - 1;

  const isLetter = function (code) {
    code = code.charCodeAt(0);
    if (
      (code >= 48 && code <= 57) || // numbers
      (code >= 65 && code <= 90) || // uppercase
      (code >= 97 && code <= 122)
    ) {
      // lowercase
      return true;
    } else {
      return false;
    }
  };

  if (s.length === 1) {
    return true;
  }

  while (start <= end) {
    if (!isLetter(s[start])) {
      start++;
      continue;
    }

    if (!isLetter(s[end])) {
      end--;
      continue;
    }

    if (s[start].toLowerCase() === s[end].toLowerCase()) {
      start++;
      end--;
    } else {
      return false;
    }
  }

  return true;
}

const res = solve("A man, a plan, a canal: Panama");

console.log("res:", res);
