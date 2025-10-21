import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const userInput = readline.createInterface({ input, output });

let getalMin = 0;
let getalMax = 10;

let getalUser = parseFloat(await userInput.question('Geef een getal in:'));

if (getalUser > getalMax || getalUser < getalMin) {
    console.log (`${getalUser} ligt niet ${getalMin} en ${getalMax}`);
} else {
    console.log (`${getalUser} ligt tussen ${getalMin} en ${getalMax}`);
}


userInput.close();
