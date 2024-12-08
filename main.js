function sumRange() {
    let start = parseInt(prompt("Введите начало диапазона:"));
    let end = parseInt(prompt("Введите конец диапазона:"));
    let sum = 0;

    for (let i = start; i <= end; i++) {
        sum += i;
    }
    console.log(`Сумма чисел в диапазоне от ${start} до ${end} равна ${sum}`);
}

function gcd() {
    let a = parseInt(prompt("Введите первое число:"));
    let b = parseInt(prompt("Введите второе число:"));
    
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    console.log(`Наибольший общий делитель: ${a}`);
}

function divisors() {
    let num = parseInt(prompt("Введите число для нахождения делителей:"));
    let divisors = [];

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            divisors.push(i);
        }
    }
    console.log(`Делители числа ${num}: ${divisors.join(", ")}`);
}

function countDigits() {
    let num = prompt("Введите число:");
    console.log(`Количество цифр в числе ${num}: ${num.length}`);
}

function countNumbers() {
    let positive = 0, negative = 0, zeros = 0, even = 0, odd = 0;
    for (let i = 0; i < 10; i++) {
        let num = parseInt(prompt(`Введите число ${i + 1}:`));
        if (num > 0) positive++;
        else if (num < 0) negative++;
        else zeros++;
        
        if (num % 2 === 0) even++;
        else odd++;
    }
    console.log(`Положительных: ${positive}`);
    console.log(`Отрицательных: ${negative}`);
    console.log(`Нулей: ${zeros}`);
    console.log(`Четных: ${even}`);
    console.log(`Нечетных: ${odd}`);
}

function calculator() {
    let continueCalculating = true;
    while (continueCalculating) {
        let num1 = parseFloat(prompt("Введите первое число:"));
        let operator = prompt("Введите оператор (+, -, *, /):");
        let num2 = parseFloat(prompt("Введите второе число:"));
        let result;
        
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            default:
                console.log("Неверный оператор!");
                continue;
        }
        console.log(`Результат: ${result}`);
        
        let again = prompt("Хотите решить еще один пример? (да/нет)").toLowerCase();
        if (again !== "да") {
            continueCalculating = false;
        }
    }
}

function shiftDigits() {
    let number = prompt("Введите число:");
    let shift = parseInt(prompt("На сколько цифр сдвинуть число?"));
    
    shift = shift % number.length;
    
    let digits = number.split('');
    
    let shifted = digits.slice(shift).concat(digits.slice(0, shift));
    
    console.log(`Сдвинутое число: ${shifted.join('')}`);
}

function showDaysOfWeek() {
    const days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
    let i = 0;

    while (confirm(`${days[i]}. Хотите увидеть следующий день?`)) {
        i = (i + 1) % days.length;
    }
}

function multiplicationTable() {
    for (let i = 2; i <= 9; i++) {
        console.log(`Таблица умножения на ${i}:`);
        for (let j = 1; j <= 10; j++) {
            console.log(`${i} x ${j} = ${i * j}`);
        }
        console.log("");
    }
}

function guessNumber() {
    let min = 0;
    let max = 100;
    let guessed = false;

    alert("Загадайте число от 0 до 100");

    while (!guessed) {
        let mid = Math.floor((min + max) / 2);
        let answer = prompt(`Ваше число > ${mid}, < ${mid} или == ${mid}? (введите >, < или ==)`);

        if (answer === ">") {
            min = mid + 1;
        } else if (answer === "<") {
            max = mid - 1;
        } else if (answer === "==") {
            alert(`Я угадал! Ваше число: ${mid}`);
            guessed = true;
        } else {
            alert("Пожалуйста, введите корректный ответ: >, < или ==");
        }
    }
}