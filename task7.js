let amount = parseFloat(prompt("Введите сумму покупки:"));

if (amount <= 0) {
    alert("Ошибка");
} else {
    let discount = 0;

    if (amount >= 200 && amount < 300) {
        discount = 3; 
    } else if (amount >= 300 && amount < 500) {
        discount = 5; 
    } else if (amount >= 500) {
        discount = 7;
    }

    let finalAmount = amount - (amount * discount / 100);

    alert(`Сумма покупки: ${amount.toFixed(2)}\nСкидка: ${discount}%\nСумма к оплате: ${finalAmount.toFixed(2)}`);
}
