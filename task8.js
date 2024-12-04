let circleLength = parseFloat(prompt("Введите длину окружности:"));
let squarePerimeter = parseFloat(prompt("Введите периметр квадрата:"));

if (circleLength <= 0 || squarePerimeter <= 0) {
    alert("Ошибка");
} else {
    const radius = circleLength / (2 * Math.PI); 
    const side = squarePerimeter / 4; 

    if (radius * 2 <= side) {
        alert("Окружность поместится в квадрат");
    } else {
        alert("Окружность не поместится в квадрат");
    }
}
