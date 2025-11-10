// M3: Priemgetal
// Vraag een getal aan de gebruiker. Controleer of dit getal een priemgetal is of niet. 
// (Een getal is een priemgetal wanneer het enkel deelbaar is door 1 of door zichzelf)

import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let isPriem = true;
let getal = parseFloat(await userInput.question('Geef een getal in:'));

for (let i = 2; i < getal; i++) {
    if (getal % i ===0) {
     isPriem = false
     console.log("is geen priemgetal")
     break
    } 
     
}

 if (isPriem) {
    console.log("is een priemgetal");
}

userInput.close();