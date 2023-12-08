/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    if (n === 1) {
        return "1";
    }

    const count = countAndSay(n - 1).split('');

    let say = "";
    let counter = 1;
    
    for (let i = 1; i <= count.length; i++) {
        if(count[i - 1] === count[i]) {
            counter++;
        }else {
            say += counter + count[i - 1];
            counter = 1;
        }
    }


    return say;
};

function countAndSay(n) {
    let say = "1";

    while (n > 1) {
        let count = 0
        let next = "";

        for (let i = 0; i <= say.length; i++) {
            if (i > 0 && say[i] !== say[i - 1]) {
                next += count + say[i - 1];
                count = 0;
            }

            count++;

        }
        say = next;
        n--;

    }

    return say;
}

console.log(countAndSay(1));