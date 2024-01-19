/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    const result = [];
    const currentLine = [];
    let length = 0;

    let i = 0;

    while(i < words.length) {
        if((length + currentLine.length + words[i].length) > maxWidth) {
            // Line is done 
            let extraSpace = maxWidth - length;
            let spaces = Math.floor(extraSpace / Math.max(1, currentLine.length - 1));
            let remainder = extraSpace % Math.max(1, currentLine.length - 1);

            for(let j = 0; j < Math.max(1, currentLine.length - 1); j++) {
                currentLine[j] += Array.from({length: spaces}, () => " ").join('');
                if(remainder) {
                    currentLine[j] += " ";
                    remainder--;
                }
            }
            result.push(currentLine.join(''));
            currentLine.length = 0;
            length = 0;
          }
          currentLine.push(words[i]);
          length += words[i].length;
          i++;
    }

    // for last line 
    let lastLine = currentLine.join(' ');
    let trailSpaces = maxWidth - lastLine.length;
    lastLine += Array.from({length: trailSpaces}, () => " ").join('')
    result.push(lastLine);

    return result;
};


// console.log(fullJustify(["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], 20));
// console.log(fullJustify(["What","must","be","acknowledgment","shall","be"], 16));
console.log(fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16));