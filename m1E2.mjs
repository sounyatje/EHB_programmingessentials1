// uitvoeren met node in de terminal van VS code file mjs  
// E2: Content dynamischer maken
// Voor deze oefening gebruiken we de file e2_dynamisch.mjs die we op de GitHub Repo voor deze oefeningenreeks kunnen terugvinden.
// We gaan onze vorige oefening iets gaan aanpassen. Vanaf nu willen we niet meer enkel deze dingen gaan bepalen in onze code,
//  maar we gaan de gebruiker elke keer achter de input vragen. 
// De output van het script blijft dezelfde.

import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let name = await userInput.question('Wat is je naam? ');


let age = await userInput.question('Hoe oud ben je? ');

let favoriteGame = await userInput.question('wat is jouw lievelingsspel?')

console.log('Hallo '+ name +', ik hoor dat je '+ age +' jaar oud bent en dat je lievelingsgame '+ favoriteGame +' is.');


// javascript in de navigator (firefox, edge,..) = file .js met een html document erbij

// const name = prompt("Wat is jouw naam?"); 
// const age = prompt("Hoe oud ben je?"); 
// const favoriteGame = prompt("Wat is je lievelingsgame?"); /


// console.log("Hallo " + name + ", ik hoor dat je " + age + " jaar oud bent en dat je lievelingsgame " + favoriteGame + " is.");

