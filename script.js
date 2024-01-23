let numONe = prompt('Digite o primeiro numero : ');
let numtwo= prompt('Digite o SEGUNDO numero : ');

numONe = Number(numONe);
numtwo = Number(numtwo);

let soma = numONe + numtwo;
let sub = numONe - numtwo;
let div = numONe / numtwo;
let mult = numONe * numtwo;

alert('Soma: '+soma);
alert('Susbtração: '+sub);
alert('Divisão: '+div);
alert('Multiplicação: '+mult);


let hePar = soma % 2;

if(hePar != 0){
  alert('O resultado da soma não é par');
}
else{
  alert('O resultado da soma é par');  
}

if(numONe == numtwo){
  alert('Os dois numeros SÃO iguais');
}
else{
  alert('Os dois numeros NÃO iguais');  
}