//E1: Even of oneven
//Schrijf een lus dat alle even getallen tussen 1 en 20 afprint.

import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'node:process';


const userInput = readline.createInterface({ input, output });
let i = 0
while (i < 20) {
i += 2
console.log (i)
}

userInput.close();