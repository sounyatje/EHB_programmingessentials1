import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'node:process';


const userInput = readline.createInterface({ input, output });

let maandUser = (await userInput.question('Geef een maand in:'));
let aantalDagen;

switch (maandUser){
    
    case 'februari': 
    aantalDagen =28;
    console.log('deze maand bevat 28 dagen')
    break;
    case 'januari':
    case 'maart':
    case 'mei':
    case 'juli':
    case 'oktober':
    case 'december':
   case 'augustus': 
   aantalDagen = 31;
   console.log('deze maand bevat 31 dagen')
    break;
    case'april':
    case 'september':
    case 'november':
    case 'juni': 
    aantalDagen = 30;
    console.log('deze maand bevat 30 dagen')
    break;

    default: console.log('deze maand bestaat niet')
}

userInput.close();