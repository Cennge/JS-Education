let number = parseInt(prompt("Введите трехзначное число:"));

if (number >= 100 && number <= 999) {
    let hundreds = Math.floor(number / 100); 
    let tens = Math.floor((number % 100) / 10);
    let ones = number % 10;

    let reversedNumber = (ones * 100) + (tens * 10) + hundreds;

    alert(`Число ${number} задом наперед: ${reversedNumber}`);
} else {
    alert("Ошибка: Введите корректное трехзначное число!");
}