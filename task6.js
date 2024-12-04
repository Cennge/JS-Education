let convertItem = parseFloat(prompt("Введите сумму в долларах: "));
const dollEuro = 0.95;

if(convertItem > 0){
    alert(`Euro: ${convertItem*dollEuro}`);
}
else{
    alert("Error")
}