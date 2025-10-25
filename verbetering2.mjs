// import readline from 'readline/promises';
// import { stdin as input, stdout as output } from 'node:process';

// const userInput = readline.createInterface({ input, output });
// let day = await userInput.question('Geef de dag in:');



// switch (day) {

// case 'maandag':

// case 'dinsdag':

// case 'woensdag':

// case 'donderdag':

// case 'vrijdag':

// console.log(day + ' is een weekdag')

// break;

// case 'zaterdag':

// case 'zondag':

// console.log(day + ' is een weekenddag')

// break; 

// }

//  userInput.close();

//----------------------------------------------------------------------

// import readline from 'readline/promises';
// import { stdin as input, stdout as output } from 'node:process';
// const userInput = readline.createInterface({ input, output });


// let num1 = parseFloat(await userInput.question('Geef een nummer 1 in:'));
// let num2 = parseFloat(await userInput.question('Geef een nummer 2 in:'));

// if (num1 == 0 || num2 == 0) {
//   console.log('Eén van de getallen is nul');
// } else {
//   if (num1 >= 0) {
//     if (num2 >= 0) {
//       console.log('Beide getallen zijn positief');
//     } else {
//       console.log('Het eerste getal is positief en het tweede negatief');
//     }
//   } else {
//     if (num2 > 0) {
//       console.log('Het eerste getal is negatief en het tweede getal is positief.');
//     } else {
//       console.log('Beide getallen zijn negatief');
//     }
//   }
// }

//----------------------------------------------------------------------

import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });


let i = 1;

while (i <= 3) {

let j = 1;

while (j <=4) {  console.log(`Buitenste lus: ${i}, Geneste lus: ${j}`); j++;

} i++;

}