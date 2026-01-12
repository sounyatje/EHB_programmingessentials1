// H1: Sterrenpiramide uitbreiden
// We gaan de sterrenpiramide uit M2 aanpassen. 
// Zorg ervoor dat er nu in plaats van een piramide een diamand te voorschijn komt, 
// dus bijvoorbeeld als hoogte gelijk is aan 5 komt er dit tevoorschijn:
//   *
//  ***
// *****
//  ***
//   *


function herhaal (karakter, aantal) {
     let aantaltoegevoegd = 0;
let lijn =""
for(let i = 0; i<aantal;i++)
    lijn += karakter
  return lijn
}

function maaklijn(aantalspaties, aantalsterren) {
let lijn =""
lijn += herhaal(" ", aantalspaties)
lijn += herhaal("*", aantalsterren)
return lijn
}

function tekendriehoek(hoogte, startspaties, extraspaties, startsterren, extrasterren){
    let aantaltoetevoegenspaties = startspaties
    let aantaltoetevoegensterren = startsterren
    for(let i = 0; i<hoogte;++i){

  console.log(maaklijn(aantaltoetevoegenspaties, aantaltoetevoegensterren));

    aantaltoetevoegensterren += extrasterren;
  aantaltoetevoegenspaties += extraspaties;
}
}

function maaksimpeledriehoek(hoogte, shift =0, bottomup = false){
if (!bottomup){
    tekendriehoek(hoogte, hoogte-1+ shift, -1, 1,2)
}else {
    tekendriehoek(hoogte, shift, 1, 2*(hoogte+1)-3, -2)
}
}

const hoogte = 4;

// tekendriehoek(hoogte, hoogte-1,-1,1, 2)

// tekendriehoek(hoogte-1, 1, 1, 2 * hoogte-3, -2)

maaksimpeledriehoek(hoogte)
maaksimpeledriehoek(hoogte-1, 1, true)
process.exit ()