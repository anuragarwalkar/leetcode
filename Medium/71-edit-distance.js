function editDistance(str1, str2) {
    const memo = {}; // Cache to store results of intermediate computations

    function recurse(i, j) {
        // Base cases: if either string is empty, return the length of the other string
        if (i === str1.length) return str2.length - j;
        if (j === str2.length) return str1.length - i;

        // If characters are equal, no operation needed
        if (str1[i] === str2[j]) {
            return recurse(i + 1, j + 1);
        }

        // If characters are not equal, consider all three operations (insert, delete, replace)
        return 1 + Math.min(
            recurse(i, j + 1),   // Insert
            recurse(i + 1, j),   // Delete
            recurse(i + 1, j + 1) // Replace
        );
    }

    // Start recursive calls from the beginning of both strings
    return recurse(0, 0);
}

// Example usage:
// const distance = minEditDistance("kitten", "sitting");
const distance = editDistance("horse", "ros");
console.log(distance); // Output: 3
