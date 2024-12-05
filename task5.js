let checkPerfectNumber = function (num) {
    let isPerfect = false;
    let sum = 0;

    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }

    if (sum === num) {
        isPerfect = true;
    }

    document.write(`Is ${num} a perfect number? ${isPerfect} <br/>`);
    return isPerfect;
}

checkPerfectNumber(6);  
checkPerfectNumber(28);
checkPerfectNumber(12); 
