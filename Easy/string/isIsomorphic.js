/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const sMemo = {

    }

    const tMemo = {

    }

    for (let i = 0; i < s.length; i++) {
        if (sMemo[s[i]] && sMemo[s[i]] !== t[i] || tMemo[t[i]] && tMemo[t[i]] !== s[i]) {
            return false
        }

        sMemo[s[i]] = t[i];
        tMemo[t[i]] = s[i];
    }


    return true;
};


const resutl = isIsomorphic('ab', 'ac')

console.log('resutl:', resutl);