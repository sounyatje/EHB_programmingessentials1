import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'node:process';


const userInput = readline.createInterface({ input, output });

//let keusUser = (await userInput.question('maak een keuze: \nRed Hot Chili Peppers\nAC/DC \nNetsky \nDe Strangers:'));
let keusUser = (await userInput.question('maak een keuze:\nRed Hot Chili Peppers\nAC/DC\nNetsky\nDe Strangers\n\nGeef de artiest in: '));

//keusUser = keusUser.toLowerCase();


switch (keusUser){
// VEUILLEZ UTILISER UNIQUEMENT DES MINUSCULES DANS TOUS LES 'CASE'
case 'Red Hot Chili Peppers':
console.log(`${keusUser} zijn achter de hit: snow`)
break;
case 'AC/DC':
console.log(`${keusUser} zijn achter het hit: Back in Black`)
break;
case 'Netsky':
console.log(`${keusUser} zijn achter het hit: Come Alive`)
break;
case 'De Strangers':
console.log(`${keusUser} zijn achter het hit: Mijnen blauwe geschelpte`)
break;
default: 
console.log('deze artiest is niet op de lijst')
}

userInput.close();