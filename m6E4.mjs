// E4: Gemiddelde
// Maak een array waar je een lijst van punten in gaat bijhouden. 
// Schrijf vervolgens code om de gemiddelde score te berekenen.

let punten =[7.5,5.5,8.5,4,9,6.4,4.9,2.5,7.3]
let som = 0;
let gemiddelde;
for(let i = 0; i< punten.length; i++) {
som += punten[i]
}
gemiddelde = som / punten.length
console.log(gemiddelde)