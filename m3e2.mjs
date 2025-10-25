//E2: Tafel van vermenigvuldiging
//Maak een variabele getal aan, gebruik een lus om de tafels van vermenigvuldiging van dat getal te laten zien. 
import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const userInput = readline.createInterface({ input, output });

let i = 1
while (i <= 10) {
console.log('5 x '+ i +' = ' + i*5)
i++

}

userInput.close()