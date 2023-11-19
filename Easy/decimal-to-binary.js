function decimalToBinary(decimalNumber) {
    const binary = [];

    while (decimalNumber) {
        const number = decimalNumber / 2;
        decimalNumber = Math.floor(number);
        binary.unshift(Number.isInteger(number) ? 0 : 1);
    }

    return binary.join('');
}

console.log(decimalToBinary(22));
console.log(decimalToBinary(23));
