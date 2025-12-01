// E2: Nummer tussen
// Maak 2 variabelen aan: minimum en maximum. Ken een getal toe aan deze variabelen.
// Vraag een getal aan de gebruiker. Controleer of dit getal tussen minimum en maximum ligt. 
// Geef de gebruiker iets terug in deze aard: Je getal 16 ligt tussen 4 en 22 of Je getal 11 ligt niet tussen 15 en 84.
// import readline from 'readline/promises';

import { stdin as input, stdout as output } from 'node:process';

const userInput = readline.createInterface({ input, output });

let getalMin = 0;
let getalMax = 10;

let getalUser = parseFloat(await userInput.question('Geef een getal in:'));

if (getalUser > getalMax || getalUser < getalMin) {
    console.log (`${getalUser} ligt niet ${getalMin} en ${getalMax}`);
} else {
    console.log (`${getalUser} ligt tussen ${getalMin} en ${getalMax}`);
}


userInput.close();
