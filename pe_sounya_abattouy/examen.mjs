// Schrijf een script dat 3 getallen aan de gebruiker vraagt.

// Kijk na of elk ingegeven getal groter is dan 0.

// Als het ingegeven getal niet groter is dan 0, stop dat de outvoer van het script aan de hand van process.exit();

// Geef na het vragen de som van de drie getallen weer.

// Zorg ervoor dat je maximum twee variabelen gebruikt.

import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let som = 0;

for (let i = 0; i < 3; i++) {
    let getal = parseFloat(await userInput.question('geef een getal in: '));
    if (getal <= 0) {
        console.log("het getal moet groter zijn dan 0");
        process.exit();
    }
    som += getal;
}

console.log("De som is: " + som);
userInput.close();
