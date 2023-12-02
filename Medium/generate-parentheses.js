/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const resultArray = [];

    function backtrack(result = "", opening = 1, closing = 0) {
        if (opening == n && closing === n) {
            resultArray.push(result);
        }

        if (opening < n) {
            backtrack(result + "(", opening + 1, closing);
        }

        if (closing < opening) {
            backtrack(result + ")", opening, closing + 1);
        }

        return resultArray;
    }

    return backtrack("", opening = 0, closing = 0);
};

console.log(generateParenthesis(2));