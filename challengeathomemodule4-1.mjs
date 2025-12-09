// @1: Sterrenrechthoek
// Vraag een hoogte en breedte aan de gebruiker. Teken een omtrek van een rechthoek met deze hoogte en breedte. Bijvoorbeeld:

// height: 4
// width: 5

// Output:

// *****
// *   *
// *   *
// *****

import * as readline from 'node:readline/promises';
 import { stdin as input, stdout as output } from 'node:process';
 
 const userInput = readline.createInterface({ input, output });
 
 let hoogte = parseInt(await userInput.question("Geef een hoogte in: "));
 let breedte = parseInt(await userInput.question("geef een breedte in: "));
 let ster ="*"
 let leegte = " "
 for(let i= 0; i<= hoogte; i++){
    hoogte += ster
    hoogte += leegte

console.log(hoogte)

    for (let j = 0; j<= breedte; j++){
        breedte += ster
        console.log(breedte)
    }

 }








 userInput.close();