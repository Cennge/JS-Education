let amountUSD = prompt("Введите количество USD:");

let currency = prompt("Введите валюту (EUR, UAN, AZN):").toUpperCase();

const rateEUR = 0.95;
const rateUAN = 36.8;
const rateAZN = 1.7;

if (currency === "EUR") {
    alert(`Сумма: ${(amountUSD * rateEUR).toFixed(2)} EUR`);
} else if (currency === "UAN") {
    alert(`Сумма: ${(amountUSD * rateUAN).toFixed(2)} UAN`);
} else if (currency === "AZN") {
    alert(`Сумма: ${(amountUSD * rateAZN).toFixed(2)} AZN`);
} else {
    alert("Ошибка: выбранная валюта не поддерживается.");
}
