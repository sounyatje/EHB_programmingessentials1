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

async function main() {
  const userInput = readline.createInterface({ input, output });

  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  const gamerChoice = await userInput.question(
    'maak een keuze: paper - rock - scissors: '
  );

  console.log({ gamerChoice, computerChoice });
  userInput.close();
}

main();
