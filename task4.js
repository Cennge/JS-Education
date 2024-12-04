
let year = parseInt(prompt("Введите год:"));

if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
    alert(`${year} год является високосным`);
} else {
    alert(`${year} год не является високосным`);
}
