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
let lijst = [];

// Fonction pour copier une liste
function kopierLijst(lijst) {
    let kopie = [];
    for (let i = 0; i < lijst.length; i++) {
        kopie.push(lijst[i]);
    }
    return kopie;
}

// Fonction pour ajouter une dépense
function voegKostenToe(lijst, kost) {
    let kopie = kopierLijst(lijst);
    if (kost > 0) {
        kopie.push(kost);
    } else {
        console.log("De kost mag niet lager zijn dan 0");
    }
    return kopie;
}

// Fonction pour calculer le total
function sum(lijst) {
    let totaal = 0;
    for (let i = 0; i < lijst.length; i++) {
        totaal += lijst[i];
    }
    return totaal;
}

// Fonction pour afficher le total
function berekenTotaal(lijst) {
    if (lijst.length > 0) {
        let totaal = sum(lijst); // On appelle sum pour obtenir le total
        console.log("De totale maandelijkse kosten zijn momenteel: " + totaal.toFixed(2));
    } else {
        console.log("Momenteel is mijn lijst leeg");
    }
}

function maakLijstLeeg (lijst){
    return []
}


// Tests
lijst = voegKostenToe(lijst, -1);
lijst = voegKostenToe(lijst, 13);
lijst = voegKostenToe(lijst, 250);
lijst = voegKostenToe(lijst, 15.99);

berekenTotaal(lijst); // Devrait afficher 278.99
lijst = maakLijstLeeg(lijst)
berekenTotaal(lijst)
