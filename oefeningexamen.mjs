// Schrijf een script dat 3 getallen aan de gebruiker vraagt.

// Kijk na of elk ingegeven getal groter is dan 0.

// Als het ingegeven getal niet groter is dan 0, stop dat de outvoer van het script aan de hand van process.exit();

// Geef na het vragen de som van de drie getallen weer.

// Zorg ervoor dat je maximum twee variabelen gebruikt.

import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

// let getal;
// let som =0;
// for (let i = 0; i<3 ; i++){
//   getal = parseInt(await userInput.question("geef een getal in: "));
//   if(getal<0){
// process.exit();
//   }
//   som += getal;
  
// } ;
// console.log(som);

// Schrijf een script dat door gebruik te maken van minstens twee lussen de volgende output naar het scherm zal printen:

// 1
// 1 2
// 1 2 3
// 1 2 3 4

let i = 1
while (i<=4){
    let j = 1
    let lijn= ""
    while (j<=i){
        lijn=lijn+j+" "
        j++
        
    }
    console.log(lijn)
    i++
}




let getal = parseFloat(await userInput.question('Geef een getal in: '));

if(getal <= 0){                                                          // we gaan cijfers op volgorde opnoemen. we beginne met 1, eerste positief getal
                                                                         // met 1%2, 1 is nul keer deelbaar door2 en rest 1 ok, maar 1%3 -> 1 is nul keer deelbaar door 3 dus toch rest1 
                                                                         //dus dit getal is half maar lucky; nu getal 2, 2%2 rest nul want 2 is juist 1 keer deelbaar door 2 -> helaas pindakaas
                                                                         //nu hebben we het getal 3; 3 is 1 keer deelbaar door 2 rest 1 ok; 3 is juist 1 keer deelbaar door 3 rest 0 -> hoera dit is een lucky getal
    console.log('Je moet een positief getal ingeven');
}else{
    if(getal % 2 == 1){
        if(getal % 3 == 0){
            console.log('Hoera, dit is een lucky getal');
        }else{
            console.log('Hmm, dit getal is maar half lucky');
        }
    }else{
        console.log('Helaas, pindakaas!');
    }
}

process.exit();  

