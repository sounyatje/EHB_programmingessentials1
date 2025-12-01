// H1: Aantal seconden
// Schrijf een script dat aan de hand van een aantal dagen, uren, minuten en seconden de totale tijd in seconden zal berekenen. 
// Een mogelijk voorbeeld van input en output voor dit script is als volgt:

import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });



let dag = parseFloat(await userInput.question('Geef de aantal dagen in:'));
let uur = parseFloat(await userInput.question('Geef de aantal uren in:'));
let minuut = parseFloat(await userInput.question('Geef de aantal minuten in:'));
let second = parseFloat(await userInput.question('Geef de aantal seconden in:'));

let daginseconden = 86400 * dag
let uurinseconden = 3600 * uur
let minuutinseconden = 60 * minuut

let seconden = daginseconden + uurinseconden + minuutinseconden + second

console.log(seconden)

userInput.close();