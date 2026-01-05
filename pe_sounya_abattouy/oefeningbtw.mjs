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

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let artikel = await userInput.question("Geef een artikel in: ");
let prijsex = parseFloat(await userInput.question("Geef de prijs (excl. BTW) in: "));

function artikelBTW(artikel, prijs) {
  let btw = 0;

  switch (artikel) {
    case "krant":
      btw = 0;       // 0% BTW
      break;
    case "voeding":
    case "medicijnen":
      btw = 0.06;    // 6% BTW
      break;
    case "restaurant":
      btw = 0.12;    // 12% BTW
      break;
    default:         // alle overige types
      btw = 0.21;    // 21% BTW
  }

  let totaal = prijs * (1 + btw);
  return totaal;
}

let totaal = artikelBTW(artikel, prijsex);
console.log("Totaal inclusief BTW:", totaal);

userInput.close();
