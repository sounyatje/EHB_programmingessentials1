// M3: Quiz
// Bouw een quizspel waarbij de gebruiker 5 vragen moet beantwoorden. 
// Toon of hij de vraag juist of fout heeft en toon achteraf de score van de gebruiker. 
// De vragen mag je zelf kiezen. Een voorbeeld van de input en output ziet er als volgt uit:

import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'node:process';


const userInput = readline.createInterface({ input, output });

let score = 0;

console.log('welkom bij de quiz!')

const antwoordGebruiker1 = (await userInput.question('wat is de hoofdstad van Frankrijk? '));
const juisteAntwoord1 = 'Parijs';

if (juisteAntwoord1 == antwoordGebruiker1) {
    console.log ('juist antwoord!')
    score ++
}
else{ console.log('het antwoord is fout') }

const antwoordGebruiker2 = (await userInput.question('wat is de hoofdstad van Marokko? '));
const juisteAntwoord2 = 'Rabat';

if (antwoordGebruiker2 == juisteAntwoord2) {
    console.log('juist antwoord!')
    score ++
} else { console.log ('het antwoord is fout')}

const antwoordGebruiker3 = (await userInput.question('wat is de hoofdstad van Japan '));
const juisteAntwoord3 = 'Tokyo'

if (antwoordGebruiker3 == juisteAntwoord3) {
    console.log('juist antwoord!')
    score++
}
else{console.log('het antwoord is fout')}

const antwoordGebruiker4 = (await userInput.question('wat is de hoofdstad van Duitsland? '));
const juisteAntwoord4 = 'Berlijn'

if (antwoordGebruiker4 == juisteAntwoord4) {
    console.log ('juist antwoord!')
    score++
} else { console.log('het antwoord is fout')}

const antwoordGebruiker5 = (await userInput.question('wat is de hoofdstad van Rusland? '));
const juisteAntwoord5 = 'Moskou'

if (antwoordGebruiker5 == juisteAntwoord5) {
    console.log('juist antwoord')
    score ++
} else {console.log('het antwoord is fout')}

console.log ( `je score is: ${score} op 5`)

userInput.close();










userInput.close();