// H2: Lopende gemiddelde
// Schrijf een script dat aan de gebruiker vraagt om een getal in te geven. 
// Het script zal gemiddelde van de ingegeven getallen bijhouden en telkens afdrukken. 
// Het script stopt wanneer de het gemiddelde boven 25 gaat.

import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal;
let gemiddelde;
let aantalgetallen = 0
let som = 0

do {getal =  parseFloat(await userInput.question('Geef een getal in:'));
   som += getal; 
    aantalgetallen++
    gemiddelde = som / aantalgetallen
    console.log(gemiddelde)

}while (gemiddelde <= 25)