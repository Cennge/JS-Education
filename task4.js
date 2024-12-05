let calculateArea = function (length, width = length) {
    return length * width;
}

document.write(`Area: ${calculateArea(5, 10)} <br/>`);
document.write(`Area: ${calculateArea(7)} <br/>`);