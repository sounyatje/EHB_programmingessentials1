// Schrijf zelf een stukje code (in JavaScript uiteraard) om de volgende uitvoer te genereren, maak gebruik van minstens 1 loop.

// 12
// 9
// 6
// 3
// 0
// -3
// -6

// let getal = 12
//   console.log(getal)
// while(getal> -6){
// getal = getal -3
// console.log(getal)
// }
 
for(let i=12;i>=-6;i= i - 3){

    console.log(i)
}

// Schrijf een stukje code om onderstaande uitvoer te verkrijgen.

// 1 2 3
// 3 6 9
// 5 10 15

for (let i = 1; i <= 5; i += 2) { //i += 2 veut dire i = i + 2, donc les valeurs de i seront: 1, 3, 5
  let lijn = "";

  for (let j = 1; j <= 3; j++) {    
    lijn += (i * j) + " ";
  }

  console.log(lijn);
}


// lijn += (i * j) + " "; veut dire:

// prends l’ancienne valeur de lijn,

// ajoute le produit i * j,

// ajoute un espace.

// Par exemple pour i = 3:

// au début: lijn = ""

// j = 1 → lijn = "3 "

// j = 2 → lijn = "3 6 "

// j = 3 → lijn = "3 6 9 "