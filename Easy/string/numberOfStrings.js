/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */

var numberOfLines = function (widths, s) {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const maxWidth = 100;
    let lineWidth = 0;
    let lines = 0;
    let i = 0;

    while(i < s.length) {
        let index = letters.indexOf(s[i]);
        lineWidth += widths[index];

        if((lineWidth > maxWidth)) {
            lines++;
            lineWidth = 0;
        }else{
            i++;
        }
    }

    if(lineWidth > 0) {
        lines ++;
    }

    return [lines, lineWidth];
};

const result = numberOfLines(
    [4,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]
    ,
    "bbbcccdddaaa"
);

console.log('result:', result);
