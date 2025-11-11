// E1: Studentenlijst
// Start met een lege array. 
// Schrijf code om deze array op te vullen met namen. Blijf dit herhalen tot je de waarde 'S' meegeeft om te stoppen. 
// Druk vervolgens je namenlijst af.

import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let namen =[]
let naamIgegeven;
do {
 naamIgegeven = await userInput.question('Wat is je naam? ');

namen.push(naamIgegeven)
 

console.log(namen)} while (naamIgegeven !== 's')

    userInput.close();