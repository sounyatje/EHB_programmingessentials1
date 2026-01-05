import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let aantaltegenererenGetallen = parseFloat(await userInput.question("hoeveel getallen wil je genereren?: "));

let som = 0
let lijst = ""
for(let i=0; i< aantaltegenererenGetallen; i++){
let getal = random(1,10)
    lijst += getal + ", "
    if(getal %2 !==2){
        som += getal
    }
}

console.log("de willekeurige getallen zijn: " +lijst)
console.log("de som van mijn ovenen getallen zijn: " + som)

process.exit();
