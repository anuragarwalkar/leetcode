/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
  const result = [];

  for (let i = 0; i < image.length; i++) {
    let reversed = image[i].reverse();
    reversed = reversed.map((i) => (i === 0 ? 1 : 0));
    result.push(reversed);
  }

  return result;
};

const result = flipAndInvertImage([
  [1, 1, 0],
  [1, 0, 1],
  [0, 0, 0],
]);

console.log("result:", result);
