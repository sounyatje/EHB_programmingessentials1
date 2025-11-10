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

let spaties = " "
for (let j = 0; j < spaties; j++) {
    regel += " ";
}

let regel = "";
for (let j = 0; j < 5; j++) {
    regel += "*";
}
console.log(regel)



userInput.close();
