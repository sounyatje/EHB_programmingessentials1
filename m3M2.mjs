// Gebruik een variabele hoogte. We gaan aan de hand van hoogte een sterrenpiramide bouwen. 
// Per laag van de piramide komt er een ster bij. Dus bijvoorbeeld als hoogte gelijk is aan 4 zal de afgedrukte piramide er zo uit zien:
// *
// **
// ***
// ****


import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

// let hoogte = 1;
// while (hoogte <= 4) {
//   let sterRegel = "";
//   let somSterren = 0;
//   while (somSterren < hoogte) {
//     sterRegel += "*";

//     somSterren++;
//   }
//   hoogte++;
//   console.log(sterRegel);
// }

for(let i=1; i<=4; i++){
  let lijn=""
  for(let j =1; j<=i; j++){
    lijn = lijn + "*"
    
  }
  console.log(lijn)
}

userInput.close();
