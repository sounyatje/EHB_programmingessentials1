/* 
oefening4: functies en logica
Om een vier-vierden cake te maken heb je buiten een snuifje zout en een vanillestokje exact 4 ingrediënten nodig:

250g suiker
250g boter
250g zelfrijzende bloem
4 eieren

Vraag aan de gebruiker hoeveel hij heeft van elk van deze ingrediënten en toon daarna hoeveel cakes hij in totaal kan maken.

Voorzie minstens de functie aantalCakes die de vier ingrediënten binnenkrijgt en het aantal cakes die kunnen gemaakt worden terugstuurt.

Voorbeelduitvoer:

Hoeveelheid suiker (g): 750
Hoeveelheid boter (g): 1035
Hoeveelheid zelfrijzende bloem (g): 600
Hoeveelheid eieren: 28

Je kan 2 vier-vierden cakes maken.
*/

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

function aantalCakes (suiker, boter, bloem, eieren){
    let cakes = Math.min(  //⚠️⚠️⚠️
suiker/250,
bloem/250,
boter/250,
eieren/4)

return Math.floor(cakes)  //⚠️⚠️⚠️
}


let suiker = 750 //parseInt(await userInput.question({ query: 'Hoeveelheid suiker (g): ' }));3
let boter  = 1035//parseInt(await userInput.question({ query: 'Hoeveelheid boter (g): ' }));4.14
let bloem  = 600//parseInt(await userInput.question({ query: 'Hoeveelheid zelfrijzende bloem (g): ' }));2.4
let eieren = 28//parseInt(await userInput.question({ query: 'Hoeveelheid eieren: ' }));7


let resultaat = aantalCakes(suiker, boter, bloem, eieren); //⚠️⚠️⚠️
console.log(`Je kan ${resultaat} vier-vierden cakes maken.`);



