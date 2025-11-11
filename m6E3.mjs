// E3: Alles samen
// Maak een combinatie van de vorige twee challenges. 
// Schrijf code om een namenlijst op te vullen met namen van je medestudenten. 
// Blijf dit herhalen totdat je 'S' ingeeft om te stoppen. 
// Eens je een lijst met namen hebt opgevuld nodig je deze personen uit om deel te nemen aan een superleuk vak.

import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let namen =[]
let naamIgegeven;
do {
 naamIgegeven = await userInput.question('geef de naam van de student in: ');

namen.push(naamIgegeven)

} while (naamIgegeven !== 's')

for (let i = 0; i < namen.length; i++) {
    console.log (namen[i] + " je bent uitgenodigd voor de les programmingessentials")
}

    userInput.close();
