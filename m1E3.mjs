// Begin van userInput voorbereiden
// E3: Opteller
// Voor deze oefening gebruiken we de file e3_opteller.mjs 
// die we op de GitHub Repo voor deze oefeningenreeks kunnen terugvinden.
// Maak een heel simpele rekenmachine die twee getallen aan de gebruiker vraagt en de som hiervan weergeeft.

import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden

let getal1 = parseFloat(await userInput.question('Geef een getal 1 in:'));
let getal2 = parseFloat(await userInput.question('Geef een getal 2 in:'));

let som = getal1 + getal2;

console.log('de som van getal 1 en getal2 is: '+ som)


process.exit();
