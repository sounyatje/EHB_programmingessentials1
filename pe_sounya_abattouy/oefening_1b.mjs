// Oefening 2: Logica (15 punten)
// Maak een programma dat getallen blijft inlezen tot het getal 42 wordt ingelezen. Geef het gemiddelde van alle getallen die groter of gelijk aan 10 zijn.
//  Zie voorbeelduitvoer.

// Voorbeelduitvoer 1:

// 7
// 10
// 14
// -2
// 11
// 42
// Gemiddelde van getallen groter of gelijk aan 10: 11.6
// Voorbeelduitvoer 2:

// 10
// 12
// 42
// Gemiddelde van getallen groter of gelijk aan 10: 11

import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });


let som = 0;
let aantalGetallen = 0;
let getal = parseFloat(await userInput.question("geef een getal in: "));
while (getal !== 42) {
   if (getal >= 10) {
        som += getal;
        aantalGetallen++;
    }
  getal = parseFloat(await userInput.question("geef een getal in: "));
    
}

if (aantalGetallen === 0) {
  console.log("Er werden geen getallen groter of gelijk aan 10 ingegeven.");
} else {
  let gemiddelde = som / aantalGetallen;
  console.log("Gemiddelde van getallen groter of gelijk aan 10: " + gemiddelde);
}