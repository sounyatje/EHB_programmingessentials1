//@2: Dagen in de maand v2
//We gaan E3 en H1 met elkaar combineren. Vraag aan de gebruiker zowel een maand als een jaar. 
//Geef het aantal dagen in die maand terug aan de gebruiker.
 //Gebruik zowel een if/else als een switch/case structuur in je oplossing.

 import * as readline from 'node:readline/promises';
 import { stdin as input, stdout as output } from 'node:process';
 
 const userInput = readline.createInterface({ input, output });
 
 let maand = await userInput.question("Geef een maand in: ");
 let jaar = parseInt(await userInput.question("geef een jaar in: "));
let aantalDagen;
 switch (maand) {
   case "september":
   case "november":
   case "januari":
   case "maart":
   case "april":
   case "juni":
   case "augustus":
    aantalDagen = 31
     break;
   case "juli":
   case "oktober":
   case "december":
   case "mei":
    aantalDagen = 30
     break;
   case "februari":
     if (jaar % 4 ===0 && jaar % 400 ===0 && !(jaar % 100 ===0 )) { aantalDagen = 29
     } else {aantalDagen = 28}
 }
console.log(maand +' ' + jaar +' ' + aantalDagen)
