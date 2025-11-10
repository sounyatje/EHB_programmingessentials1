// E2: Oppervlakes
// Schrijf functies om de oppervlaktes van de volgende vormen te berekenen:

// cirkel: Pi x straal x straal (je kan de waarde van Pi opvragen met Math.PI)
// driehoek: basis x hoogte gedeeld door 2
// rechthoek: zijde1 x zijde2
// vierkant: zijde x zijde
 

// Zorg ervoor dat je functie om de oppervlakte van een vierkant te berekenen de functie om de oppervlakte van een rechthoek te berekenen gebruikt. 
// Zorg ervoor dat al deze functies de waardes terugsturen en zelf geen output hebben.

function cirkel (pi, straal){
    let oppervlakteCirkel = pi * straal * straal
    console.log( "het oppervlakte van de cirkel is: " + oppervlakteCirkel)
}

cirkel(3.14,15)

function driehoek (basis, hoogte){
    let oppervlakteDriehoek = (basis*hoogte)/2
    console.log(" het oppervlakte van de driehoek is: " + oppervlakteDriehoek) 
}

driehoek(5,6)

function rechthoek (zijde1,zijde2){
    let oppervlakteRechthoek = zijde1 * zijde2
    console.log("het oppervlakte van de rechthoek is: " + oppervlakteRechthoek)
}

rechthoek(4,6)

function vierkant (zijde) {
    let oppervlakteVierkant = zijde * zijde
    console.log("het oppervlakte van de vierkant is: " + oppervlakteVierkant)
}

vierkant(3)