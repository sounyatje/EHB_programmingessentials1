// E1: Oppervlakte
// Maak een script waar je een zijde1 en zijde2 kan ingeven. 
// Geef de oppervlakte van een rechthoek met de afmetingen zijde1 en zijde2.

import * as readline from 'node:readline/promises';
 import { stdin as input, stdout as output } from 'node:process';
 
 const userInput = readline.createInterface({ input, output });
 

 const zijde1 = parseInt(await userInput.question("geef zijde 1 in: "));
 const zijde2 = parseInt(await userInput.question("geef zijde 2 in: "));

  let oppervlakte = zijde1 * zijde2

  console.log(oppervlakte)

  userInput.close();