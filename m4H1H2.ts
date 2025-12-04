// H1: Schaar/Steen/Papier
// We gaan een simpele versie van rock/paper/scissors maken. Vraag aan de gebruiker of ze rock, paper or scissors willen 'gooien'. 
// Je kan de computer random laten kiezen met de volgende code:

// let choices = ['rock', 'paper', 'scissors'];
// let computerChoice = choices[Math.floor(Math.random()*choices.length)];

// We bekijken deze syntax in module 6, momenteel kan je gewoon copy/pasten
// Laat zien of de gebruiker of computer heeft gewonnen.

// H2: SSP uitbreiden
// Zorg ervoor dat het spelletje schaar/steen/papier blijft door gaan tot de gebruiker of de computer 3 maal heeft gewonnen. 
// Vraag elke keer opnieuw aan de gebruiker wat hij wilt 'gooien' en maak laat de computer elke keer een nieuwe keuze maken 
// met computerChoice = choices[Math.floor(Math.random()*choices.length)];

import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
let scoreComputer: number = 0
    let scoreGamer: number = 0
async function main() {
  const userInput = readline.createInterface({ input, output });

  const choices:(string)[] = ["rock", "paper", "scissors"];
  
  
  do{
    
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  const gamerChoice:string = await userInput.question(
    'maak een keuze: paper - rock - scissors: ');

if((gamerChoice === "rock" && computerChoice === "scissors")||
(gamerChoice === "scissors" && computerChoice ==="paper")||
(gamerChoice === "paper" && computerChoice === "rock")) {
    scoreGamer++
}
 else if ((computerChoice === "rock" && gamerChoice === "scissors") ||
 (computerChoice === "scissors" && gamerChoice === "paper") ||
 (computerChoice === "paper" && gamerChoice ==="rock")) {
    scoreComputer++
 } else {
    console.log("try again")}
  console.log({ gamerChoice, computerChoice });
  console.log({scoreGamer, scoreComputer})
  } while (scoreComputer !== 3 || scoreGamer !== 3)
  userInput.close();
}

main();
