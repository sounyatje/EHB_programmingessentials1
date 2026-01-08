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

async function leesMuntVanInput() {
  let naam = await userInput.question("Voer de naam van de munt in:: ");
  let herkomst = await userInput.question("Voer de herkomst van de munt in: ");
  let waarde = await userInput.question("Voer de waarde van de munt in: ");
  let jaartal = parseInt(
    await userInput.question("Voer de jaartal van de munt in: ")
  );

  let kenmerk = await userInput.question(
    "Voer de kenmerken, typ gedaan om te stoppen: "
  );
  let kenmerken = [];
  while (kenmerk !== "gedaan") {
    kenmerken.push(kenmerk);
    kenmerk = await userInput.question(
      "Voer de kenmerken, typ gedaan om te stoppen: "
    );
  }
  return {
    naam: naam,
    herkomst: herkomst,
    waarde: waarde,
    jaartal: jaartal,
    kenmerken: kenmerken,
  };
}

function drukMuntAf(munt) {
for (const key in munt){
    console.log(key + ': ' + munt[key])
 }
}

let munt = await leesMuntVanInput();
drukMuntAf(munt);

process.exit()
