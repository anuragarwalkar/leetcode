function compare(s, t) {
  function removePound(input) {
    let firstStr = [];

    for (let i = 0; i < input.length; i++) {
      if (input[i] == "#") {
        firstStr.pop();
      } else {
        firstStr.push(input[i]);
      }
    }
    firstStr.join("");
  }

  return removePound(s) == removePound(t);
}

function compare(s, t) {
  let p1 = s.length - 1;
  let p2 = t.length - 1;

  while (p1 >= 0 || p2 >= 0) {
    if (s[p1] === "#" || t[p2] === "#") {
      if (s[p1] === "#") {
        let counter = 2;
        while (counter > 0) {
          counter--;
          p1--;

          if (s[p1] === "#") {
            counter += 2;
          }
        }
      }

      if (t[p2] === "#") {
        let counter = 2;
        while (counter > 0) {
          counter--;
          p2--;

          if (t[p2] === "#") {
            counter += 2;
          }
        }
      }
    }

    if (s[p1] !== t[p2]) {
      return false;
    }

    if (s[p1] === t[p2]) {
      p1--;
      p2--;
    }
  }

  return true;
}

const resutl = compare("ab#c", "ad#c");
// const resutl = compare("abc#d", "abzz##d");
// const resutl = compare("bxj##tw", "bxj###tw");
// const resutl = compare("xywrrmp", "xywrrmu#p");

console.log("resutl:", resutl);
