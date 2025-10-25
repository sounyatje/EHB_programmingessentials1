import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'node:process';


const userInput = readline.createInterface({ input, output });

let getal1 = parseFloat(await userInput.question('Geef het eerste getal in:'));
let getal2 = parseFloat(await userInput.question('Geef de tweede getal in:'));
let getal3 = parseFloat(await userInput.question('Geef de derde getal in:'));
let getal4 = parseFloat(await userInput.question('Geef de vierde getal in:'));
let getal5 = parseFloat(await userInput.question('Geef de vijfde getal in:'));

let gemiddelde = ( getal1 + getal2 + getal3 + getal4 + getal5) / 5
let grootsteGetal = getal1
if (getal1 < getal2){
    grootsteGetal = getal2
} if (getal2 < getal3) {
    grootsteGetal = getal3
} if (getal3 < getal4){
    grootsteGetal = getal4
} if (getal4 < getal5) {
    grootsteGetal = getal5
} else {console.log('vergelijking onmogelijk')}

let kleinsteGetal = getal1
if (getal1 > getal2){
    kleinsteGetal = getal2
} if (getal2 > getal3) {
    kleinsteGetal = getal3
} if (getal3 > getal4){
    kleinsteGetal = getal4
} if (getal4 > getal5) {
    kleinsteGetal = getal5
} 


console.log('grootste getal is:'+ grootsteGetal)
console.log('kleinste getal is: ' + kleinsteGetal)
console.log ('gemiddelde is:' + gemiddelde)