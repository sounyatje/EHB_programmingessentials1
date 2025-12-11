// M2: Menu
// Maak een object genaamd restaurant met eigenschappen naam (string), keuken (string), en menu (array van objecten). 
//  een methode toevoegenAanMenu toe waarmee je een nieuw gerecht aan het menu kunt toevoegen. Elk gerecht heeft een naam en een prijs.

let restaurant = {
    naam:"luiggi",
    keuken:"italiaans",
    menu: [{gerecht:"pizza", prijs:12}, {gerecht:"pasta", prijs:10}

    ],

}

function toevegoenAanMenu (gerecht, prijs){
restaurant.menu.push({ gerecht: gerecht, prijs: prijs }); //⚠️⚠️⚠️

}

toevegoenAanMenu("lasagna",15)
console.log(restaurant)