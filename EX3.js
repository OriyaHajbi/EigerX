const num = 2347623;

function sumRecursion(number) {
    const digit = number % 10;
    const newNumber = parseInt(number / 10);
    if (newNumber < 10) {
        return newNumber + digit;
    }
    return sumRecursion(newNumber) + digit;
}

console.log(sumRecursion(num));