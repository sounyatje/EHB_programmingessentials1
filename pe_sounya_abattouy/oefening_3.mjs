
// Oefening 3: Functies/Arrays (20 punten)
// Schrijf zelf de volgende functies die een array als boodschappenlijst gaan aanvaarden en de geupdate lijst terug gaan returnen:

// voegItemToe(lijst, item): Voeg item toe aan het einde van lijst
// toonLijst(lijst): Druk de hele inhoud van lijst af
// maakLijstLeeg(lijst): Zorg ervoor dat lijst niets meer bevat
// Zorg ervoor dat de output ook overeen komt met wat er in het voorbeeld staat.


// Deze functies moeten op deze manier kunnen worden aangeroepen:

// lijst = voegItemToe(lijst, 'Melk');
// lijst = voegItemToe(lijst, 'Brood');
// lijst = voegItemToe(lijst, 'Choco');

// toonLijst(lijst);
// /* Het resultaat hiervan moet op dit moment zijn:

// Er staat het volgende op mijn lijstje:
// - Melk
// - Brood
// - Choco
// */

// lijst = maakLijstLeeg(lijst);
// toonLijst(lijst);
// /* Het resultaat hiervan moet op dit moment zijn:

// Momenteel is mijn lijst leeg
// */

import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let lijst = [];

function voegItemToe(lijst, item) {
    lijst.push(item);
    return lijst;
}

function toonLijst(lijst) {
    if (lijst.length === 0) {
        console.log('Momenteel is mijn lijst leeg');
    } else {
        console.log('Er staat het volgende op mijn lijstje:');
         for (let i = 0; i < lijst.length; i++) {
      console.log(lijst[i]);
    }
    }
}

function maakLijstLeeg(lijst) {
    while(lijst.length > 0){
        lijst.pop()
    }
    return lijst
}

// function maakLijstLeeg(lijst) {
//     for (let i = lijst.length; i > 0; i--) {
//         lijst.pop(); // supprime toujours le dernier
//     }
//     return lijst;
// }

// Test
lijst = voegItemToe(lijst, 'Melk');
lijst = voegItemToe(lijst, 'Brood');
lijst = voegItemToe(lijst, 'Choco');

toonLijst(lijst); // correcte output

lijst = maakLijstLeeg(lijst);
toonLijst(lijst); // correcte output
