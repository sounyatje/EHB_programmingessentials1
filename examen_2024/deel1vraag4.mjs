/*
Vraag 4: Functies/logica (15 punten)

Schrijf een functie die berekent hoeveel tijd (in seconden uitgedrukt) het zal kosten om een bestand te downloaden.

Om dit te berekenen, vragen we aan de gebruiker drie variabelen:

- De bestandsgrootte in MB
- De (gemiddelde) bandbreedte (MB/s)
- De overhead als percentage (van 0 tot 100)

Voorzie minstens de functie tijdInSeconden die:
- de drie gegevens binnen krijgt;
- het aantal seconden dat het zal duren om te downloaden terugstuurt.

De formule is:
tijd in seconden = bestandsgrootte / bandbreedte * (1 + (overhead/100))

Voorbeelduitvoer:

Bestandsgrootte: 3500
Bandbreedte: 28
Overhead: 40

Tijd in seconden: 175 seconden */

import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const userInput = readline.createInterface({ input, output });

function tijdInSeconden(bestandsgrootte, bandbreedte, overhead) {
return bestandsgrootte / bandbreedte * (1 + (overhead/100))
}

let bestandsgrootte = parseInt(await userInput.question('bestandsgrootte: '));
let bandbreedte = parseInt(await userInput.question('bandbreedte: '));
let overhead = parseInt(await userInput.question('overhead: '));

console.log("tijd in seconden: " + tijdInSeconden(bestandsgrootte,bandbreedte,overhead))