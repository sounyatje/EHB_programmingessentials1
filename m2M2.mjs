// M1: Uitbreiden van "Opteller"
// We gaan onze "Opteller" van de vorige oefening licht aanpassen. In plaats van de gebruiker om de getallen te vragen gaan we zelf twee getallen definiëren. 
// Vervolgens gaan we van deze twee getallen de som, verschil, product en deling laten zien.
// Verander één van de getallen naar een getal waar quotes rond staan, dus bijvoorbeeld let getal1 = "33";. 
// Bekijk wat voor invloed dit zal hebben op de output van je code.

import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let getal1 = parseFloat(await userInput.question('Geef een getal 1 in:'));
// let som = '+'
// let delen = '/'
// let vermenigvuldigen = '*'
// let aftrekken = '-'
let uitkomst = (await userInput.question('maak een keuze:\n- \n+ \n/\n* '));

let getal2 = parseFloat(await userInput.question('Geef een getal 2 in: '));

switch (uitkomst){
    case '+':
    console.log(getal1 + getal2)
    break;
    case '/':
    console.log(getal1 / getal2)
    break;
    case '*':
    console.log(getal1 * getal2)
    break;
    case '-':
    console.log(getal1 - getal2)
    break;
    default:
        console.log('error')
}



userInput.close();