// Oefening 2: Logicaleitek

/*
Schrijf een script dat een nummerpyramide gaat genereren voor de gebruiker. Vraag de volgende dingen aan de gebruiker:

- De hoogte van de pyramide
- Of de pyramide links begint

Hier zie je enkele voorbeelden van pyramides:

Hoogte: 3
Start links: Ja

Output:
1
12
123

Hoogte: 5
Start links: Nee

Output:
    1
   21
  321
 4321
54321
*/

// import * as readline from "node:readline/promises";
// import { stdin as input, stdout as output } from "node:process";
// const userInput = readline.createInterface({ input, output });

// let hoogte = 5; //parseInt(await userInput.question("Hoogte: "))
// let breedte = hoogte
// let links = false; //await userInput.question("start links? (ja/nee): ").toLowerCase === 'ja'
// let piramide = "";

// function maakString(karakter, aantal) {
//   let resultaat = "";
//   for (let i = 0; i < aantal; i++) {
//     resultaat += karakter;
//   }
//   return resultaat;
// }

// function maakReeks(nummer, omgekeerd) {
//   let reeks = "";
//   if (omgekeerd) {
//     for (let i = nummer; i >= 1; i--) {
//       reeks += i;
//     }
//   } else {
//     for (let i = 1; i <= nummer; i++) {
//       reeks += i;
//     }
//   }
//   return reeks;
// }

// for (let rij = 1; rij <= hoogte; rij++) {
//   if (!links) {
//     piramide += maakString(" ", breedte - rij);
//   }
//   piramide += maakReeks(rij, links);
//   piramide += "\n";
// }

// console.log(piramide);

// process.exit();


import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const userInput = readline.createInterface({ input, output });

let hoogte = parseInt(await userInput.question("Hoogte: "));
let start = await userInput.question("Start (links/rechts): ");

for (let i = 1; i <= hoogte; i++) {
  let rij = "";

  if (start === "rechts") {
    for (let s = 1; s <= hoogte - i; s++) {
      rij += " ";
    }
    for (let j = i; j >= 1; j--) { //⚠️⚠️⚠️
      rij += j;
    }
  } else {
    for (let j = 1; j <= i; j++) {
      rij += j;
    }
  }

  console.log(rij);
}

userInput.close();
process.exit();
