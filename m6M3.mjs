// M3: Search
// schrijf een functie om in een namenlijst te zoeken op welke plaats een bepaalde naam voorkomt. 
//  je teruggeeft is ofwel de index van de naam binnen de array ofwel -1 als je de naam niet kan vinden. 
//  als je bijvoorbeeld een lijst hebt met de volgende namen let namen = ["Amin", "Sofie", "Samantha", "Karel", "Mehdi", "Joris", "Nuria"] 
//  en je zoekt op Mehdi dan krijg je als resultaat 4.

import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let namen = ["amin", "sofie", "samantha", "karel", "mehdi", "joris", "nuria"] 

// for (let i = 0; i < namen.length; i++) {
//   console.log(i + " " + namen[i]); // i affiche l’index
//    // namen[i] affiche la valeur à cet index
// }

let  naamIgegeven = await userInput.question('Wat is de naam? ');
let gevonden = false;
for (let i = 0; i < namen.length; i++){
if (naamIgegeven === namen[i]) {
    gevonden = true
    console.log(i)
    break
}  
}
  
if (gevonden === false) console.log("-1")