// M1: Korting plz
// Maak een array waar je enkele prijzen in gaat bijhouden. 
// schrijf vervolgens een functie om 15 procent korting te geven. 
// Deze functie krijgt een prijs binnen en geeft als resultaat de nieuwe prijs met korting terug. 
//  vervolgens over al je prijzen en pas de geefKorting functie toe op elke prijs.

let standaardprijs =[6.5,8.5,14.30,22.5,3.9,4.8,10.95]

function prijsmetkorting (korting){
    let nieuwprijs;
for (let i = 0; i < standaardprijs.length; i++){
 nieuwprijs = standaardprijs[i] - (standaardprijs[i]*korting)
console.log("de nieuwe prijzen zijn "+ nieuwprijs)}
return nieuwprijs
}

prijsmetkorting (0.15)