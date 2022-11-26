var interpret = function (command) {
  let finalStr = "";
  for (let i = 0; i < command.length; i++) {
    if (command[i] === "(" && command[i + 1] === ")") {
      finalStr += "o";
    } else {
      switch (command[i]) {
        case "(": {
          break;
        }
        case ")": {
          break;
        }
        default: {
          finalStr += command[i];
        }
      }
    }
  }

  return finalStr;
};

const result = interpret("G()(al)");

console.log("result:", result);
