// @2: Dagen in de maand v2
// We gaan E3 en H1 met elkaar combineren. Vraag aan de gebruiker zowel een maand als een jaar. 
// Geef het aantal dagen in die maand terug aan de gebruiker.
//  Gebruik zowel een if/else als een switch/case structuur in je oplossing.

import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const userInput = readline.createInterface({ input, output });

let maand = await userInput.question('geef een maand in: ');
let jaartal = parseFloat(await userInput.question('Geef een jaartal in: '));



