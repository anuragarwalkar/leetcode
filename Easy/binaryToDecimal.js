function binaryToDecimal(binaryNumber) {
    const binary = binaryNumber.toString();
    let decimalTotal = 0;

    for (let i = 0; i < binary.length; i++) {
        if(binary[i] != 0) {
            decimalTotal += 2**(binary.length - (i +1)) ;
        }
    }

    return decimalTotal
}

console.log(binaryToDecimal(101101));
