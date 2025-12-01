// Schrijf een script dat een jaartal inleest en als output het aantal dagen in februari weergeeft.

// De 'regels' voor een schrikkeljaar zijn als volgt:

// Het jaartal is deelbaar door 4 => wel een schrikkeljaar
// Het jaartal is deelbaar door 100 => geen schrikkeljaar
// Het jaartal is deelbaar door 400 => toch wel een schrikkeljaar

import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const userInput = readline.createInterface({ input, output });

let jaartal = parseFloat(await userInput.question('Geef een jaartal in:'));

if (jaartal % 4 === 0 && !(jaartal % 100 === 0) || jaartal % 400 === 0) {
    console.log("het is een schrikkeljaar")
} else {
    console.log( 'het is geen schrikkeljaar')
}

userInput.close();