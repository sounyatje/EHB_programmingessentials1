// Gebruik een variabele hoogte. We gaan aan de hand van hoogte een sterrenpiramide bouwen. 
// Per laag van de piramide komt er een ster bij. Dus bijvoorbeeld als hoogte gelijk is aan 4 zal de afgedrukte piramide er zo uit zien:
// *
// **
// ***
// ****


import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let hoogte = 1;
let ster = '*'

while (hoogte <= 4) {
   console.log(ster = hoogte * ster)
    hoogte ++
}


process.exit();
