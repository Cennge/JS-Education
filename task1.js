let Task1 = function(a,b)
{
    if (a<b) return -1;
    else if(a>b) return 1;
    else return 0;
}

let Task1_1 = (a,b)=>
{ 
    if (a<b) return -1; 
    else if(a>b) return 1;
    else return 0;
}

document.write(`Результат= ${ Task1_1(1,5)} <br/>`);
document.write(`Результат = ${ Task1_1(5,1)} <br/>`);
document.write(`Результат = ${ Task1_1(1,1)} <br/>`);
