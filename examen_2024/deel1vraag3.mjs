// /* Vraag 3: Functies/Arrays (20 punten) */

// Schrijf de volgende functies die een array binnenkrijgen als parameter. 
// Die array bevat een lijst van positieve getallen. De functies returnen een geupdatete lijst

// voegPositiefGetalToe(lijst, getal): Voeg een getal toe aan het einde van de lijst. 
// Zorg dat de functie het getal enkel toevoegt als het ingegeven getal hoger is dan 0
// maakLijstLeeg(lijst): Maak de array leeg zodat deze niets meer bevat.
// toonAantalEven(lijst): Deze functie toont het aantal even getallen (geheel deelbaar door 2) die zich in de lijst bevinden. 
// Toon dat de lijst leeg is indien er helemaal geen getallen zijn

// Zorg ervoor dat de output overeenkomt met het onderstaande voorbeeld, de functies moet je op deze manier kunnen oproepen:

 //let lijst = []
// lijst = voegPositiefGetalToe(lijst, 6);
// lijst = voegPositiefGetalToe(lijst, -5);
 // Het getal -5 mag niet toegevoegd zijn.
// lijst = voegPositiefGetalToe(lijst, 9);
// lijst = voegPositiefGetalToe(lijst, 250);
// lijst = voegPositiefGetalToe(lijst, 16);

// toonAantalEven(lijst);

 // Het resultaat hiervan moet op dit moment zijn:
//Het aantal even getallen: 3

// lijst = maakLijstLeeg(lijst);
// toonAantalEven(lijst);

import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

function voegPositiefGetalToe (lijst, getal) {
    if (getal >0) {
    lijst.push(getal) 
    }
    return lijst
}

function maakLijstLeeg(lijst) {
    while (lijst.length > 0) {
        lijst.pop()
    }
    return lijst
}

function toonAantalEven(lijst) {
 
    let aantalEven = 0
    for (const value of lijst) {
        if(value %2 ===0) {
        aantalEven++
        }
    }
       if(lijst.length > 0){
        console.log("aantal even getallen: " + aantalEven)
        } else {
        console.log("momenteel is mijn lijst leeg")
        
    }

    return aantalEven
}

let lijst = []
lijst = voegPositiefGetalToe(lijst, 6);
lijst = voegPositiefGetalToe(lijst, -5);
 lijst = voegPositiefGetalToe(lijst, 9);
lijst = voegPositiefGetalToe(lijst, 250);
lijst = voegPositiefGetalToe(lijst, 16);

toonAantalEven(lijst)
maakLijstLeeg(lijst)
toonAantalEven(lijst)