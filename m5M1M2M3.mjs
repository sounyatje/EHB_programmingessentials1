// M1: Hoger/lager
// We gaan beginnen met een klein spel te bouwen. De opzet is heel simpel: 
// de gebruiker moet een getal tussen 1 en 10 juist raden. 
// Dankzij enkele functies van Math kunnen we random getallen genereren:

// function random(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// Begin door aan de gebruiker eenmalig een getal te vragen en zeg aan de gebruiker die het juiste getal heeft geraden of niet. 
// Als de gebruiker het juiste getal niét heeft gegokt, 
// laat dan weten of het hoger of lager moet zijn.

// M2: Hoger/lager v2
// Zorg ervoor dat de gebruiker kan blijven gokken tot het juiste getal is gevonden.

// M3: Hoger/lager v3
// Hou het aantal 'levens' bij. De gebruiker kan maar 3 maal gokken voor het Game Over is.

import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

function random(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
 }

   
   let randomGetal = random(1,10)

   let getal
   do {  getal = parseFloat(await userInput.question('Geef een getal tussen 1 en 10 in:'));
 if (getal === randomGetal){
    console.log("juist geraden") }
    else if (getal>randomGetal){
        console.log("het is lager")
    } else if (getal<randomGetal) {
        console.log("het is hoger")
    }

     } while (randomGetal !== getal)

    //levens?

userInput.close();