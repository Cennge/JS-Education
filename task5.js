let distance = parseFloat(prompt("Введите расстояние между городами (в км):"));

let time = parseFloat(prompt("Введите время за которое вы хотите добраться (в часах):"));

if (distance > 0 && time > 0) {
    let speed = distance / time;
    alert(`Вам нужно двигаться со скоростью ${speed.toFixed(2)} км/ч`);
}
else {
    alert("Ошибка");
}