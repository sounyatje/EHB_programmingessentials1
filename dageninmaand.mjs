// @2: Dagen in de maand v2
// We gaan E3 en H1 met elkaar combineren. Vraag aan de gebruiker zowel een maand als een jaar. 
// Geef het aantal dagen in die maand terug aan de gebruiker.
//  Gebruik zowel een if/else als een switch/case structuur in je oplossing.

import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const userInput = readline.createInterface({ input, output });

let maand = await userInput.question('geef een maand in: ');
let jaartal = parseFloat(await userInput.question('Geef een jaartal in: '));

switch (maand){
     case 'februari': 
     if (jaartal % 4 === 0 && !(jaartal % 100 === 0) || jaartal % 400 === 0) {
     
    console.log("deze maand bevat 29 dagen")
} else {
  
    console.log('deze maand bevat 28 dagen')
}
    break;
    case 'januari':
    case 'maart':
    case 'mei':
    case 'juli':
    case 'oktober':
    case 'december':
   case 'augustus': 

   console.log('deze maand bevat 31 dagen')
    break;
    case'april':
    case 'september':
    case 'november':
    case 'juni': 

    console.log('deze maand bevat 30 dagen')
    break;

    default: console.log('deze maand bestaat niet')
}


