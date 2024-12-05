let factorial = function(a){
    if (a === 0 || a === 1) {
        return 1;
    }
    return a * factorial(a - 1);
}

document.write(`Factorial of 5 = ${factorial(5)} <br/>`);