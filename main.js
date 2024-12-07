let stringFrom = function(...args) {
    return args.join(' ');
};

let getMinValue = function(...args) {
    return Math.min(...args);
};

let numbers = function(...args) {
    let count = 0;
    for(let arg of args) {
        if(typeof arg === "number") count++;
    }
    return count;    
};

let mean = function (...args) {
    let count = 0;
    let sum = 0;
    for (let arg of args) {
        if (typeof arg === "number") {
            sum += arg;
            count++;
        }
    }

    if (count > 0) {
        return sum / count;
    } else {
        return 0;
    }
};

let isPowerOfTwo = function (x) {
    if (x === 1) return true;
    if (x < 1 || x % 2 !== 0) return false;
    return isPowerOfTwo(x / 2);
}


console.log(stringFrom("I have", 5, "apples", "its", true));
console.log(getMinValue(1, 6, 7, 8, 11, 33));
console.log(numbers(1, false, 7, "blah blah blah", 11, true));
console.log(mean(3, false, 7, "blah blah blah", 11, true));
console.log(isPowerOfTwo(32));
