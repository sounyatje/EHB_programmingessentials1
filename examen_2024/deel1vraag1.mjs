// Vraag 1: Logica (15 punten)

// Je kan de volgende code gebruiken om een willekeurig getal tussen min en max te genereren.

//function random(min, max) {
 //   return Math.floor(Math.random() * (max - min + 1)) + min;
//}

// Maak een kort script dat een eenvoudige spelletje darts simuleert.
// Vraag aan de gebruiker hoeveel de gooien score (de restscore) is en blijf dit herhalen zolang dit een getal onder 100 is.
// Genereer daarna een willekeurig getal van 0 tot en met 20, toon dit getal aan de gebruiker en verminder de restscore hiermee.
// Toon daarna de restscore aan de gebruiker.
// Herhaal dit tot de restscore 0 of minder is.


// Bv:

// Te gooien score: 52
// Te gooien score: 105

// Gegooid: 20
// Restscore: 85

// Gegooid: 17
// Restscore: 68

// Gegooid: 13
// Restscore: 55

/*
Gegooid: 0
Restscore: 55

Gegooid: 19
Restscore: 36

Gegooid: 19
Restscore: 17

Gegooid: 20
Restscore: -3
*/

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let restscore = parseFloat(await userInput.question("te gooien score: "));

while (restscore < 100){
    restscore = parseFloat(await userInput.question("te gooien score: "));

}

while (restscore >0) {

let gooi = random(0,20)

restscore -= gooi
console.log("Gegooid: " + gooi)
console.log("Restscore: " + restscore)
}