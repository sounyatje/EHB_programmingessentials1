
// Oefening 1: Logica (10 punten)

// Maak een script dat aan de gebruiker vraagt hoeveel random getallen hij wil genereren (tussen 1 en 10).
// Gebruik de volgende snippet in je code om deze random getallen te generen en toon ze aan je gebruiker.

// function random(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// Toon op het einde hoeveel van deze getallen even zijn.

// Voorbeelduitvoer: 

// Hoeveel willekeurige getallen wil je genereren? 7

// De gegenereerde willekeurige getallen zijn: 3, 1, 8, 2, 9, 6, 10

// Van de gegenereerde getallen zijn er 4 even.

import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let aantaltegenererenGetallen = parseFloat(await userInput.question("hoeveel getallen wil je genereren?: "));
let aantalEven=0
for(let i=0; i< aantaltegenererenGetallen; i++){
    let r = random(1,10)
    console.log(r)
    if(r % 2 ===0){
   aantalEven++
    }
}

console.log(aantalEven)

process.exit();
