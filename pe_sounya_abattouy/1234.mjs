/* Vraag 5: Objecten/Functies

Schrijf een script voor een muntdeskundige.

Een muntdeskundige is geen verzamelaar van tic/tac, maar is iemand die geldstukken, munten, verzamelt en bestudeert.

Doe nu het volgende:

Schrijf een script waarin je gegevens van een munt aan de gebruiker vraagt en deze in een object bewaart. De gegevens die je moet verzamelen zijn:
de naam van de munt, de herkomst, de waarde, het jaartal van uitgifte en kenmerken van de munt.
Bewaar de kenmerken in een array.
Zorg dat de gegevens van de munt daarna mooi geformatteerd worden weergegeven. Schrijf om dit te doen een functie waar je het munt-object meegeeft als parameter.
De gebruiker moet in staat zijn om meerdere kenmerken in te voeren totdat de gebruiker "GEDAAN" invoert.

Voorbeelduitvoer:

Voer de naam van de munt in: 20 Belgische Frank
Voer de herkomst van de munt in: België
Voer de waarde van de munt in: 20 Frank
Voer het jaartal van uitgifte van de munt in: 1865

Voer de kenmerken van de munt in (typ "GEDAAN" om te stoppen):
Beeld van koning Leopold II
Munt in zilver
Gedecoreerd met lauwertakens
*/

import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const userInput = readline.createInterface({ input, output });

let munt = {
    naam:"",
    herkomst:"",
    waarde:"",
    jaartal:"",
    kenmerken:[]
}

let naam = (await userInput.question("naam: "));
let herkomst  = (await userInput.question("herkomst: "));
let waarde = parseFloat(await userInput.question("waarde: "));
let jaartal = parseFloat(await userInput.question("jaartal: "));

let kenmerk = (await userInput.question("kenmerken: "));
while(kenmerk !== 'gedaan'){
munt.kenmerken.push(kenmerk)
kenmerk = (await userInput.question("kenmerken: "));
}


function toonMunt(munt) {
    console.log("Naam: " + munt.naam);
    console.log("Herkomst: " + munt.herkomst);
    console.log("Waarde: " + munt.waarde);
    console.log("Jaartal: " + munt.jaartal);
    console.log("Kenmerken:");

    for (let kenmerk of munt.kenmerken) {
        console.log("- " + kenmerk);
    }
}

munt.naam=naam
munt.herkomst=herkomst
munt.waarde=waarde
munt.jaartal=jaartal

toonMunt()

userInput.close()
process.exit()