import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const userInput = readline.createInterface({ input, output });

//Tu essaies d’utiliser userInput.question(...), mais la variable userInput n’existe pas encore.
//En Node.js, pour demander quelque chose à l’utilisateur dans le terminal, il faut importer le module readline/promises.

let getal = parseFloat(await userInput.question('Geef een getal in:'));

if (getal % 2 == 0) {
    
    console.log(`${getal} is even`) 
} else {
    console.log(`${getal} is oneven`)
}

userInput.close();

//sert à fermer proprement l’interface que tu as ouverte avec :
// const userInput = readline.createInterface({ input, output });
// 🧠 Explication simple :
// Quand tu fais : readline.createInterface({ input, output });
// tu crées une connexion active entre ton script et le terminal (stdin/stdout).
// Tant que cette connexion reste ouverte, Node.js ne “termine” pas le programme.
// ➡️ Donc sans userInput.close(), ton programme resterait bloqué après la dernière ligne, comme s’il attendait encore quelque chose.

// 💬 En résumé :
// userInput.question(...) → pose une question à l’utilisateur.

// userInput.close() → ferme le canal de communication une fois la réponse donnée.

// Si tu oublies close(), le script continue à tourner (sans rien afficher) et tu dois faire Ctrl + C pour le stopper manuellement.