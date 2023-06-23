var compose = (functions) => (x) => functions.reverse().reduce((a, b) => b(a), x);

const fn = compose([x => x + 1, x => x * x, x => 2 * x])

console.log(fn(4));