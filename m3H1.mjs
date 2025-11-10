// H1: Sterrenpiramide uitbreiden
// We gaan de sterrenpiramide uit M2 aanpassen. 
// Zorg ervoor dat er nu in plaats van een piramide een diamand te voorschijn komt, 
// dus bijvoorbeeld als hoogte gelijk is aan 5 komt er dit tevoorschijn:
//   *
//  ***
// *****
//  ***
//   *

import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let hoogte = 1;
while (hoogte <= 5){
    let sterRegel =""
    let somSterren = 0
     while(somSterren < hoogte){
         sterRegel +="*"
        if ( hoogte === 4) {
            somSterren--
        }
somSterren++
       
}
 hoogte++
console.log(sterRegel)
    
}


userInput.close();
