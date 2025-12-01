// M2: Leeftijdberekenaar
// Schrijf een script waar je twee variabelen gebruikt, geboorteJaar en toekomstJaar.
// Laat je script uitprinten hoe oud je zal zijn in toekomstJaar.
// Hou er rekening mee dat je twee verschillende leeftijden zou kunnen zijn in toekomstJaar,
// dus zorg ervoor dat je output iets is in de vorm van: In 2031 zal ik 24 of 25 jaar oud zijn.
import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });
let geboorteJaar= parseFloat(await userInput.question('Geef je geboortejaar in:'));
let toekomstJaar = parseFloat(await userInput.question('Geef de toekomstjaar in:'));

let toekomstLeeftijd2 = toekomstJaar - geboorteJaar
let toekomstLeeftijd1 = toekomstLeeftijd2 - 1

console.log('in ' + toekomstJaar + ' zal je ' + toekomstLeeftijd1 + ' of ' + toekomstLeeftijd2 + ' zijn ')
userInput.close();