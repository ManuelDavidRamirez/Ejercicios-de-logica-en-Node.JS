function fizz_buzz(n) {
    let cicle = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            cicle.push("FizzBuzz");
        } else if (i % 3 === 0) {
            cicle.push("Fizz");
        } else if (i % 5 === 0) {
            cicle.push("Buzz");
        } else {
            cicle.push(i);
        }
    }
    return cicle
}

let input = 15;
let output = fizz_buzz(input);

console.log(output);