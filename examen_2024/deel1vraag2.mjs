/*
Schrijf een script dat een nummervierkant gaat genereren voor de gebruiker. 
Vraag de volgende dingen aan de gebruiker:

De hoogte van het vierkant
Of de getallen per rij of per kolom verhogen

Hier zie je enkele voorbeelden van vierkanten:

Hoogte: 5
Per Rij of Kol: Rij

Output:
11111
22222
33333
44444
55555

Hoogte: 4
Per Rij of Kol: Kol

Output:
1234
1234
1234
1234
*/
// import * as readline from "node:readline/promises";
// import { stdin as input, stdout as output } from "node:process";
// const userInput = readline.createInterface({ input, output });

// let hoogte = parseInt(await userInput.question("de hoogte: "));
// let rij = await userInput.question("rij of kolom: ");

// let verhoogrij = rij === "rij";

// for (let i = 1; i <= hoogte; i++) {
//     let lijn = "";                        //wat doet rij en wat doet lijn? verschil
//     for (let j = 1; j <= hoogte; j++) {
//         if (verhoogrij) {
//             lijn = lijn + i; //verhoog i
//         } else {
//             lijn = lijn + j; // verhoog j
//         }
//     }
//     console.log(lijn);
// }

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let hoogte = parseInt(await userInput.question("de hoogte: "));
let rk = await userInput.question("rij of kolom: ");

for (let i = 1; i <= hoogte; i++) {
  let lijn = "";
  if (rk === "rij") {
    for (let j = 1; j <= hoogte; j++) {
      lijn = lijn + i;
    }
     console.log(lijn);
  } else {
    for (let j = 1; j <= hoogte; j++) {
      lijn = lijn + j;
    }
    console.log(lijn);
  }
}
