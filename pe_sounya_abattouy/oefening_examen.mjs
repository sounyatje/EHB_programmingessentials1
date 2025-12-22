
// Wat is het laagste geheel positief getal dat een gebruiker als input kan geven om de volgende dingen als output te krijgen:
// Hoera, dit is een lucky getal: 
// 3

// Hmm, dit getal is maar half lucky: 
// 2

// Helaas, pindakaas!: 
// 4


import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

// Création de l'interface pour lire l'input utilisateur
const userInput = readline.createInterface({ input, output });

// On demande à l'utilisateur un nombre

let getal = parseFloat(await userInput.question('Geef een getal in: '));

// Vérification si le nombre est positif


if (getal <= 0) {
    console.log('Je moet een positief getal ingeven');
} else {

    // 1️⃣ Vérification si le nombre est impair (reste = 1)
    if (getal % 2 === 1) {

        // 1A️⃣ Si le nombre est impair ET divisible par 3
        if (getal % 3 === 0) {
            console.log('Hoera, dit is een lucky getal');

        // 1B️⃣ Si le nombre est impair MAIS pas divisible par 3
        } else {
            console.log('Hmm, dit getal is maar half lucky');
        }

    // 2️⃣ Si le nombre est pair
    } else {
        console.log('Helaas, pindakaas!');
    }
}

process.exit();

// ✔ 1. "Hoera, dit is een lucky getal"

// if (getal % 2 === 1) {          // impair
//     if (getal % 3 === 0) {      // divisible par 3
//         console.log('Hoera, dit is een lucky getal');
//     }
// }

// Donc :
// → Doit être impair
// → Doit être divisible par 3
// ✔ Le plus petit nombre = 3

// ✔ 2. "Hmm, dit getal is maar half lucky"

// Ce bloc :

// if (getal % 2 === 1) {          // impair
//     if (getal % 3 !== 0) {      // PAS divisible par 3
//         console.log('Hmm, dit getal is maar half lucky');
//     }
// }


// Donc :
// → Impair
// → Pas divisible par 3
// ✔ Plus petit nombre = 1

// ✔ 3. "Helaas, pindakaas!"

// Ce bloc :

// else { // ce else s'applique quand getal % 2 !== 1 → donc pair
//     console.log('Helaas, pindakaas!');
// }


// Donc :
// → Nombre pair
// ✔ Le plus petit nombre pair positif = 2