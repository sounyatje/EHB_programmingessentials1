// Schrijf een script dat door gebruik te maken van minstens twee lussen de volgende output naar het scherm zal printen:
// 1
// 1 2
// 1 2 3
// 1 2 3 4

let i = 1;                     // Buitenste teller

while (i <= 4) {
    let lijn = "";             // Bouwt de tekst per lijn
    let j = 1;                 // Binnenste teller begint altijd opnieuw bij 1

    while (j <= i) {
        if (j === 1) {
            lijn += j;         // Eerste getal → geen spatie
        } else {
            lijn += " " + j;   // Vanaf tweede getal → spatie toevoegen
        }
        j++;
    }

    console.log(lijn);
    i++;
}


// 💡 Uitleg waarom je twee while-lussen nodig hebt

// De buitenste while bepaalt de rij (1 t/m 4)

// De binnenste while print alle getallen in die rij
// → Van 1 tot de waarde van i

// Dus:

// Als i = 1 → print 1

// Als i = 2 → print 1 2

// Als i = 3 → print 1 2 3

// Als i = 4 → print 1 2 3 4

// Exact wat je wilde ✨

// Dit gebeurt met behulp van twee geneste while-lussen: één buitenste lus en één binnenste lus.

// Werking van de Buitenste while-lus
// De buitenste lus gebruikt de variabele i, die start bij 1.

// Elke keer dat de buitenste lus begint, betekent dat er een nieuwe rij (regel) gemaakt wordt.

// De lus loopt zolang i <= 4 is (dus over 4 rijen).

// Na elke iteratie van de buitenste lus verhoogt i met 1, waardoor de volgende rij gebouwd wordt.​

// Werking van de Binnenste while-lus
// De binnenste lus gebruikt de variabele j, die steeds weer bij 1 start voor elke nieuwe regel.

// De lus voegt getallen toe aan de string tot en met de waarde van de buitenste teller i.

// Bijvoorbeeld, als i gelijk is aan 3, dan wordt de binnenste while 3 maal uitgevoerd: j=1, j=2, j=3.

// Elk getal wordt achter elkaar (en met een spatie vanaf het tweede getal) aan de regel toegevoegd.​

// Relatie tussen de twee lussen
// Voor elke waarde van i geeft de binnenste lus alle getallen van 1 t/m i op één regel.

// Daarna print het script die gehele regel met console.log(lijn).

// Op het scherm krijg je elke keer één regel die een cijfer langer is tot aan maximum 4.

// Waarom heb je twee lussen nodig?
// De buitenste lus zorgt voor hoeveel regels er zijn (hier: 4 regels).

// De binnenste lus zorgt voor de getallen die op elke regel komen, van 1 tot en met de huidige regelnummer.​

// Overzicht
// Bijvoorbeeld:

// Eerste keer: i = 1, lijn = "1"

// Tweede keer: i = 2, lijn = "1 2"

// Derde keer: i = 3, lijn = "1 2 3"

// Vierde keer: i = 4, lijn = "1 2 3 4"

// Elke rij bouwt dus verder op de vorige door één extra getal toe te voegen dankzij de relatie tussen i (hoeveelste rij) en j (het getal dat op die rij moet komen).​

// Zo werken geneste lussen: ze laten je toe om patronen of tabellen te maken die uit meerdere lagen bestaan.​