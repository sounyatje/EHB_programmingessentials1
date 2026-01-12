// H1: Sterrenpiramide uitbreiden
// We gaan de sterrenpiramide uit M2 aanpassen. 
// Zorg ervoor dat er nu in plaats van een piramide een diamand te voorschijn komt, 
// dus bijvoorbeeld als hoogte gelijk is aan 5 komt er dit tevoorschijn:
//   *
//  ***
// *****
//  ***
//   *

import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let hoogte = 3;

for (let i = 1; i <= 3; i++) {
  let sterRegel =""
  let ster="*"
  for(let j = 1; j<=5; j = j + 2)
    ster = ster * j
  sterRegel = " " + ster + " "
  console.log(sterRegel);
}

let hoogte2 =2
for(let k = 1; k<=2; k++){
  let sterRegel2 = ""
  let ster2 = "*"
  for(let l = "1"; l<=hoogte2; l++){

  }
}


