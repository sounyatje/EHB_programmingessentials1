// H2: Battleships
// We gaan starten met een basis om zeeslag te kunnen spelen. Maak gebruik van een multidimensional array die je speelveld voorstelt. 
// Deze array stelt 10 rijen en kolommen voor voor je speelveld. Schrijf een functie waar je twee cooordinaten aan meegeeft. 
// x stelt voor waar je in de breedte op schiet, y stelt voor waar je in de hoogte op schiet. Op die plaats zet je in de array een *.

let speelveld = [];

for (let i = 0; i < 10; i++) {
  speelveld[i] = [];                
  for (let j = 0; j < 10; j++) {
    speelveld[i][j] = " ";             
  }
}


function coordinaten(x, y) {
  speelveld[y][x] = "*";
}

coordinaten(2,5)
console.log(speelveld)