// Oefening 4: Functies/Beslissingen (20 punten)
// Schrijf een script dat twee dingen aan de gebruiker vraagt:

// Wat voor type artikel. De volgende types zijn geldig:
// krant: 0% BTW
// voeding: 6% BTW
// medicijnen: 6% BTW
// restaurant: 12% BTW
// Alle overige types: 21% BTW
// Prijs exclusief BTW
// Zorg ervoor dat de prijs inclusief btw in de variabele totaal komt de staan na uitvoer van je script.

// Zorg ervoor dat je script minstens een switch/case structuur en een functie bevat.

// Als je bvb 12% BTW bij een bedrag wilt toevoegen kan dit door het bedrag te vermenigvuldigen met 1.12.

import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let artikelType = await userInput.question("Welk type artikel? ");
let prijsEx = parseFloat(await userInput.question("Prijs exclusief BTW: "));

function berekenTotaal(type, prijs) {
    let btw = 0;

    switch (type) {
        case "krant":
            btw = krant * 1.00
            break;

        case "voeding":
            btw = voeding * 1.06
            break;

        case "medicijnen":
            btw = medicijnen * 1.06
            break;

        case "restaurant":
            btw = restaurant * 1.12
            break;

        default:
            btw = type * 1.21
            break;
    }

    // retourneer prijs inclusief btw
    return prijs * (1 + btw);
}

let totaal = berekenTotaal(artikelType, prijsEx);

console.log("Totaal inclusief BTW:", totaal);

process.exit();
