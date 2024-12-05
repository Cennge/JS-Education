function isPerfect(num) {
    let sum = 0;
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    return sum === num;
}

function findPerfectNumbersInRange(min, max) {
    let result = '';
    for (let i = min; i <= max; i++) {
        if (isPerfect(i)) {
            result += i + ' ';
        }
    }
    return result;
}

document.write(`Perfect numbers in range: ${findPerfectNumbersInRange(1, 10000)} <br/>`);
