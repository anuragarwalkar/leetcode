/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let capitalCount = 0;
    let smallCount = 0;
    let onlyInitialCapital = false;

    for (let i = 0; i < word.length; i++) {
        let w = word[i];
        
        if(w.toUpperCase() === w ) {
            onlyInitialCapital = i === 0;
            capitalCount++;
        }else {
            smallCount++;
        }
    }

    if(onlyInitialCapital) {
        return true;
    }

    if(capitalCount === word.length) {
        return true;
    }

    if(smallCount === word.length) {
        return true;
    }

    return false;
};

const result = detectCapitalUse("USA");

console.log('result:', result)