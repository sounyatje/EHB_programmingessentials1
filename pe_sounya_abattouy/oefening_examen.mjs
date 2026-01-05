
// Wat is het laagste geheel positief getal dat een gebruiker als input kan geven om de volgende dingen als output te krijgen:
// Hoera, dit is een lucky getal: 
// 4

// Hmm, dit getal is maar half lucky: 
// 1

// Helaas, pindakaas!: 
// 2


import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let getal = parseFloat(await userInput.question("Geef een getal in: "));

if (getal <= 0) {
  console.log("Je moet een positief getal ingeven");
} else {
  if (getal % 3 == 1) {
    if (getal % 2 == 0) {
      console.log("Hoera, dit is een lucky getal");
    } else {
      console.log("Hmm, dit getal is maar half lucky");
    }
  } else {
    console.log("Helaas, pindakaas!");
  }
}

process.exit();
