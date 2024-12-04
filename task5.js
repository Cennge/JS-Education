let number = prompt("Введите пятизначное число:");

if (number.length === 5) {
    if (number[0] === number[4] && number[1] === number[3]) {
        alert(`${number} является палиндромом`);
    } else {
        alert(`${number} не является палиндромом`);
    }
} else {
    alert("Ошибка");
}