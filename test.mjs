import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

// let jeTaal = await userInput.question('Wat is je taal NL, FR of EN? ');

// if (jeTaal == "NL") {
// console.log ("goede dag")
// } else if (jeTaal == "FR") {
// console.log ("bonjour") }
// else if (jeTaal == "EN"){
// console.log ("hello") };

// userInput.close();

// On le refait très lentement, avec ton exemple.

// js
// let postcodeStudent = 1150;
// let postcodeAnderlecht = 1070;

// if (!(postcodeStudent = postcodeAnderlecht)) {
//   ...
// }
// 1. Deux choses différentes
// = signifie “je mets cette valeur dans la variable” (affectation).​

// === signifie “je teste si les deux valeurs sont égales” (comparaison).​

// Toi, tu voulais comparer, mais tu as utilisé l’affectation dans le if.

// 2. Que fait postcodeStudent = postcodeAnderlecht ?
// Ligne par ligne :

// Avant:
// postcodeStudent vaut 1150, postcodeAnderlecht vaut 1070.

// L’expression postcodeStudent = postcodeAnderlecht fait deux choses:

// change postcodeStudent pour 1070,

// renvoie la valeur 1070 (l’affectation a une valeur).​

// Donc dans ton if, en réalité tu as:

// js
// if (!(1070)) {
//   ...
// }
// 3. Que vaut !(1070) ?
// Dans un if, JavaScript convertit d’abord en booléen:

// 0 → false

// tout autre nombre (comme 1070) → true​

// Donc:

// 1070 devient true

// !true devient false

// Résultat: la condition du if est false, donc le bloc if { ... } ne s’exécute pas.

// 4. Ce que tu voulais écrire
// Tu voulais sûrement dire “si les postcodes sont différents”:

// js
// if (postcodeStudent !== postcodeAnderlecht) {
//   ...
// }
// ou “si les postcodes sont égaux”:

// js
// if (postcodeStudent === postcodeAnderlecht) {
//   ...
// }
// Si tu veux, donne un autre petit exemple que tu as en tête, et on l’analyse ensemble pas à pas.

// let tvSerie = await userInput.question('Welke TV-serie?');
// let locatie;
// switch( tvSerie ) {

// case 'The Simpsons':
// locatie = "Springfield";
// console.log ( tvSerie + ' vindt plaats in ' + locatie)
// break;
// case 'Louis de funes':
// locatie = "Frankrijk";
// console.log ( tvSerie + ' vindt plaats in ' + locatie)
// break;
// case 'Paranormal':
// locatie = "Egypte";
// console.log ( tvSerie + ' vindt plaats in ' + locatie)
// break;
// case 'Blood & water':
// locatie = "Zuid-afrika";
// console.log ( tvSerie + ' vindt plaats in ' + locatie)
// break;
// default: console.log ('ik ken deze serie niet') }

// Schrijf een lus die het volgende als resultaat zal printen in je console:

// 0
// 3
// 6
// 9
// 12

// for(let i = 0; i<=12; i = i+3){
//     console.log(i)
// }


//  let som = 0
//  for(let getal = 0; som<=100; ){
//     getal = parseFloat(await userInput.question('Geef een getal in: '));
//    som += getal;
//    console.log(som)
//  }


// Gebruik geneste loops om de volgende output te krijgen:

// 1 2 3 4   //1*1 1*2 1*3 1*4
// 2 4 6 8   //1*2 2*2 3*2 4*2
// 3 6 9 12  //1*3 2*3 3*3 3*4



// for (let i = 1; i <= 3; i++) {
//   let rij = "";
//   for (let j = 1; j <= 4; j++) {
//     rij += i * j + " ";
//   }
//   console.log(rij);
// }





let number = 5;

for (let i = 1; i < number; i += 2) {
    let output = '';
    output += i + ' ';
  }

