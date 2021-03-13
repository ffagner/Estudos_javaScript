# operadores aritiméticos
  
- ( + adição e concatenação)
- ( - subtração)
-  ( / divisão)
-  ( * multiplicação)
-  ( ** potenciação)
-  ( % resto da divisão)

````
// converte o numero em sua representação binária
let num = 10;
console.log(num.toString(2));

// para fixar o numero de casas decimais, exemplo 2:
console.log(num.toFixed(2));

//verificar de o numero é inteiro, retorana True ou False:
console.log(Number.isInteger(num));
````
## Objeto Math

````
// arredondar numeros:
let num = 20.55245;
console.log(Math.floor(num)); // arrendoda sempre para baixo
console.log(Math.ceil(num)); // arrendoda sempre para cima
console.log(Math.round(num)); // arrendoda para o valor mais proxima acima ou abaixo de .5
````
````
// gerenado numeros aleatórios
// o metodo RANDOM gera numeros ente 0 e 1;
let min = 1;
let max = 100;
console.log(Math.round(Math.random() * (max - min) + min));
````
## acessando um elemento html
````
 let numero = document.getElementById("ID do elemento")
````

## Array
````

// Array

são os [] que define um array;

const conjunto = ['fagner', "martins", "faroias"];

console.log(conjunto[0]);
console.log(conjunto.push("daiana")) // add um elemento ao array no final;
console.log(conjunto);
console.log(conjunto.length);
console.log(conjunto.unshift("fabricio")); // add o elemento na primeira posição;
console.log(conjunto);
console.log(conjunto.shift()); // remove o primeiro elemento do array;
console.log(conjunto);
console.log(conjunto.pop()); // remove o ultimo elemento do array
console.log(conjunto);
delete conjunto[2]; // deleta o elemento da posição informada, porem retorna na posição um elemento vazio;
console.log(conjunto);
console.log(conjunto instanceof Array); // verifica se o objeto é uma instancia de array;