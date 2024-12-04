let day = parseInt(prompt("Введите день (1-31):"));
let month = parseInt(prompt("Введите месяц (1-12):")) - 1;
let year = parseInt(prompt("Введите год:"));

if (
    isNaN(day) || isNaN(month) || isNaN(year) ||
    day <= 0 || month < 0 || month > 11 || year <= 0
) {
    alert("Ошибка");
} else {
    let currentDate = new Date(year, month, day);
    currentDate.setDate(currentDate.getDate() + 1); 

    let nextDay = currentDate.getDate();
    let nextMonth = currentDate.getMonth() + 1;
    let nextYear = currentDate.getFullYear();

    alert(`Следующая дата: ${nextDay}.${nextMonth}.${nextYear}`);
}
