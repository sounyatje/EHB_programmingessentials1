// 1. Initialisatie: Variabele opstarten (teller of startwaarde)
let teller = 0; 

while(teller < 10) { // 2. Conditie: Zolang deze waar is, herhaal
    
    // Codeblok (De taak die herhaald moet worden)
    console.log("Huidige telling: " + teller); 
    
    // 3. Aanpassing: Zorg dat de conditie verandert
    teller++; // Verhoog de teller met 1
} 
// De loop stopt wanneer 'teller' 10 wordt.

--------------------------------------------------------------------------

let som = 0; // Initialisatie van het resultaat
let getal = 1; // Initialisatie van de teller

while(getal <= 50){
    
    // ⚠️ Uw vraag: Zijn deze 2 regels hetzelfde? NEEN! ⚠️
    
    // STAP 1: ACCUMULATIE (Het werk)
    // Voeg de huidige waarde (bijv. 1, dan 2, dan 3, ...) toe aan de totale som.
    som += getal; 
    
    // STAP 2: INCREMENTATIE (De voortgang)
    // Zorg ervoor dat we naar het volgende getal gaan (2, dan 3, dan 4, ...).
    // Zonder deze stap wordt het een oneindige lus!
    getal++;
}

console.log("De totale som is: " + som);

------------------------------------------------------------------------------

let getal = 2; // Startwaarde (de eerste macht van 2)

while(getal < 5000){
    
    // Toon de huidige waarde
    console.log(getal); 
    
    // AANPASSING: Vermenigvuldigen
    // De teller wordt in elke stap *exponentieel* groter.
    getal *= 2; 
} 
// De loop stopt wanneer 'getal' 5000 of meer is geworden.