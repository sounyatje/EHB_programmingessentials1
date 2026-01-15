// Oefening 3: Functies/Arrays

/*
Schrijf de volgende functies die een array binnenkrijgen als parameter, 
de array stelt een lijst met je maandelijkse kosten voor. 
De functies retourneren een geüpdatete lijst.

voegKostenToe(lijst, kost): Voeg een kost toe aan het einde van de lijst. 
Zorg ervoor dat het ingegeven getal hoger is dan 0.

maakLegeLijstEen(lijst): Maakt de array leeg zodat deze niets meer bevat.

berekenTotaal(lijst): Druk de totale kosten af als een kommagetal.

Zorg ervoor dat de output overeenkomt met het onderstaande voorbeeld, 
de functies moet je op deze manier kunnen oproepen:

lijst = voegKostenToe(lijst, 50.45);
lijst = voegKostenToe(lijst, -1);
lijst = voegKostenToe(lijst, 13);

 Het resultaat hiervan moet op dit moment zijn:
 De kost mag niet lager zijn dan 0

lijst = voegKostenToe(lijst, 250);
lijst = voegKostenToe(lijst, 15.99);

berekenTotaal(lijst);

Het resultaat hiervan moet op dit moment zijn:
De totale maandelijkse kosten zijn momenteel: 326.49

lijst = maakLijstLeeg(lijst);
berekenTotaal(lijst);

 Het resultaat hiervan moet op dit moment zijn:
Momenteel is mijn lijst leeg
*/


// Oefening 3: Functies/Arrays

let lijst = [];

// Voeg een kost toe aan de lijst
function voegKostenToe(lijst, kost) {
    if (kost > 0) {
        lijst.push(kost);
    } else {
        console.log("De kost mag niet lager zijn dan 0");
    }
    return lijst;
}


// Maak de lijst leeg met pop()
function maakLijstLeeg(lijst) {
    while (lijst.length > 0) {
        lijst.pop();
    }
    return lijst;
}

// Bereken het totaal
function berekenTotaal(lijst) {
    if (lijst.length === 0) {
        console.log("Momenteel is mijn lijst leeg");
        return;
    }

    let totaal = 0;
    for (let i = 0; i < lijst.length; i++) {
        totaal += lijst[i];
    }

    console.log(`De totale maandelijkse kosten zijn momenteel: ${totaal.toFixed(2)}`);
}

// ===== Test zoals in de opdracht =====

lijst = voegKostenToe(lijst, 50.45);
lijst = voegKostenToe(lijst, -1);
lijst = voegKostenToe(lijst, 13);

lijst = voegKostenToe(lijst, 250);
lijst = voegKostenToe(lijst, 15.99);

console.log(lijst) 

berekenTotaal(lijst);

lijst = maakLijstLeeg(lijst);
berekenTotaal(lijst);
