function number_cardinality(n) {
    let lastDigit = Math.abs(n % 10);
    if (lastDigit === 0) {
        return "zero"
    } else if (lastDigit === 5) {
        return "five"
    } else if (input % 2 === 0 && lastDigit !== 0) {
        return "even"
    } else if (input % 2 !== 0 && lastDigit !== 5) {
        return "odd"
    }
}

let input = 99;
let output = number_cardinality(input);

console.log(output);