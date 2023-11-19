var titleToNumber = function(columnTitle) {
    let total = 0;
    for(let i = 0; i < columnTitle.length; i++) {
        const charIndex = columnTitle[i].charCodeAt(0) - 64;
        total += charIndex *  Math.pow(26, (columnTitle.length - (i + 1)));
    }

    return total;
};

console.log(titleToNumber("AB"));