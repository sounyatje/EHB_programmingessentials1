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

 let item = await userInput.question("Wat is de item? ");
 let prijs = parseFloat(await userInput.question("Wat is de prijs? "));
 function prijsBTW(item, prijs) {
   let totaal = 0;
   switch (item) {
     case "krant":
       totaal = prijs * 1.0;
       break;
     case "voeding":
     case "medicijnen":
       totaal = prijs * 1.06;
       break;
     case "restaurant":
       totaal = prijs * 1.12;
       break;
     default:
       totaal = prijs * 1.21;
   }
   return totaal;
 }

 let totaal = prijsBTW(item, prijs);
 console.log("Prijs inclusief btw: " + totaal);
 userInput.close();