let number = prompt("Введите трехзначное число:");

if (number.length === 3) {
    let digit1 = number[0];
    let digit2 = number[1];
    let digit3 = number[2];

    if (digit1 === digit2 || digit1 === digit3 || digit2 === digit3) {
        alert("В числе есть одинаковые цифры");
    } else {
        alert("Все цифры числа разные");
    }
} else {
    alert("Ошибка");
}