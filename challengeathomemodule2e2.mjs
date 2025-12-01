// @2: Grootste gemene deler
// Vraag twee getallen aan de gebruiker. Zoek de grootste gemene deler van deze twee getallen.
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const userInput = readline.createInterface({ input, output });

let getal1 = parseInt(await userInput.question('Geef getal 1 in: '));
let getal2 = parseInt(await userInput.question('Geef getal 2 in: '));

// Bepaal de kleinste van de twee
let k;
if (getal1 < getal2) {
  k = getal1;
} else {
  k = getal2;
}

// Zoek de grootste gemene deler door van k naar beneden te gaan
while (k >= 1) {
  if (getal1 % k === 0 && getal2 % k === 0) {
    console.log('Grootste gemene deler is: ' + k);
    break;
  }
  k--;
}

userInput.close();


//⚠️⚠️⚠️