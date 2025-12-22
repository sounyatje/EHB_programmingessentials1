// Oefening 2: Logica (15 punten)
// Maak een programma dat getallen blijft inlezen tot het getal 45 wordt ingelezen. Geef het gemiddelde van alle getallen die kleiner of gelijk aan 10 zijn. Zie voorbeelduitvoer.

// Voorbeelduitvoer 1:

// 7
// 10
// 14
// -2
// 11
// 45
// Gemiddelde van getallen kleiner of gelijk aan 10: 5
// Voorbeelduitvoer 2:

// 10
// 12
// 45
// Gemiddelde van getallen kleiner of gelijk aan 10: 10


import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let som = 0;
let aantalGetallen = 0;
let getal;

do {
  getal = parseFloat(await userInput.question('Geef een getal in: '));

  if (getal <= 10) {
    som += getal;
    aantalGetallen++;
  }

} while (getal !== 45);

let gemiddelde = som / aantalGetallen;

console.log("Gemiddelde van getallen kleiner of gelijk aan 10: " + gemiddelde);

process.exit();
