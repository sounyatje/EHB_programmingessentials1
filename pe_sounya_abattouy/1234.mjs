// Oefening 5: Objecten/Functies (15 punten)
// Schrijf een script waarin je gegevens van een student aan de gebruiker vraagt en deze in een object  bewaart. De studentengegevens die je moet verzamelen zijn naam, opleiding, leeftijd en interesses.

// De gebruiker moet in staat zijn om meerdere interesses in te voeren totdat de gebruiker "STOP" invoert.

// Zorg dat de gegevens van de student daarna mooi geformatteerd worden weergegeven. Schrijf om dit te doen een functie.

// Voorbeelduitvoer

// Voer de naam van de student in: John Doe
// Voer de opleiding van de student in: Toegepaste Informatica
// Voer de leeftijd van de student in: 20

// Voer de interesses van de student in (typ 'STOP' om te stoppen):
// Programming
// Gaming
// Reading
// STOP

// Output van de functie:

// Naam: John Doe
// Opleiding: Toegepaste Informatica
// Leeftijd: 20
// Interesses: Programming, Gaming, Reading

import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let student = {
    naam:"",
    opleiding:"",
    leeftijd:"",
    interesses:[]
}

let naam = await userInput.question("naam: ")
let opleiding = await userInput.question("opleiding: ")
let leeftijd = await userInput.question("leeftijd: ")

let interesse=await userInput.question("interesse?: ")
while(interesse !== "stop"){
    student.interesses.push(interesse)
     interesse=await userInput.question("interesse?: ")
}

student.naam = naam
student.opleiding = opleiding
student.leeftijd = leeftijd

function toonStudent (student) {
    console.log(student.naam)
    console.log(student.opleiding)
    console.log(student.leeftijd)
    console.log(student.interesses)
}

toonStudent(student)