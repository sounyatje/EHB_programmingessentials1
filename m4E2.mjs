// E2: Veelvouden
// Schrijf een script met de volgende variabelen:

// start: Met welk getal beginnen we?
// end: Met welk getal eindigen we?
// deler1: Wat is het eerste getal waarop we testen?
// deler2: Wat is het tweede getal waarop we testen?
// Zorg ervoor dat het script het volgende gaat uitprinten: alle getallen tussen start en end die deelbaar zijn door zowel deler1 als deler2.


// E3: Veelvouden uitbreiden
// Pas je vorige script aan. 
// Zorg ervoor dat je aan de hand van de variabelen deelbaar1 en deelbaar2 kan kiezen 
// of een getal wel of niet deelbaar moet zijn door deler1 of deler2 om ze weer te geven.

import * as readline from 'node:readline/promises';
 import { stdin as input, stdout as output } from 'node:process';
 
 const userInput = readline.createInterface({ input, output });
 

 let start = parseInt(await userInput.question("met welk getal starten we: "));
 let end = parseInt(await userInput.question("met welk getal eindigen we: "));
 const deler1 = parseInt(await userInput.question("Wat is het eerste getal waarop we testen?: "));
 const deler2 = parseInt(await userInput.question("Wat is het tweede getal waarop we testen?: "));
let deelbaar1 = await userInput.question("Moet het getal wél deelbaar zijn door deler1, of juist niet?: ");
let deelbaar2 = await userInput.question("Moet het getal wél deelbaar zijn door deler2, of juist niet?: ");

 if (deelbaar1 === "ja" ) {
      deelbaar1 = true
    
      console.log(deelbaar1)
    } else if (deelbaar1 === "neen") {
      deelbaar1 = false
      console.log(deelbaar1)
    }

if (deelbaar2 === "ja"){
  deelbaar2 =true
} else if (deelbaar2 ==="neen") {
  deelbaar2 = false
  console.log(deelbaar2)
}
   

for( start ;end >= start; start++){
    let getal = start
  
    if(getal % deler1 ===0 && deelbaar1 == true){
      console.log(getal)
    } 
    if (getal % deler2 ===0 && deelbaar2 == true) {
      console.log(getal)
    }
}

 userInput.close();

//⚠️⚠️⚠️