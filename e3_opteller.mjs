// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden

let getal1 = parseFloat(await userInput.question('Geef een getal 1 in:'));
let getal2 = parseFloat(await userInput.question('Geef een getal 2 in:'));

let som = getal1 + getal2;

console.log('de som van getal 1 en getal2 is: '+ som)


process.exit();
