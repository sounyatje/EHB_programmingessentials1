
import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'node:process';


const userInput = readline.createInterface({ input, output });

function som (getal,opteller){

let som = getal + opteller;

console.log( getal + '+' + opteller + '=' + som)

}

som (3,4)

userInput.close();