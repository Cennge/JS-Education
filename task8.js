let walletAmount = parseFloat(prompt("Введите сумму денег в вашем кошельке:"));

let chocolatePrice = parseFloat(prompt("Введите цену одной шоколадки:"));

if (walletAmount > 0 && chocolatePrice > 0) {
    let chocolateCount = Math.floor(walletAmount / chocolatePrice);
    let change = walletAmount - (chocolateCount * chocolatePrice);

    alert(`Вы можете купить ${chocolateCount} шоколадок. Сдача: ${change.toFixed(2)} руб.`);
} else {
    alert("Ошибка");
}
