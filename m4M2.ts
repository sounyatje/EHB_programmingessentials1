// M2: Sterrenpiramide uitbreiden
// We voegen enkele variabele booleans toe aan onze sterrenpiramide van oefeningenreeks 3: startTop en startLeft. 
// Afhankelijk van of deze variabelen true of false zijn zal de vorm van onze piramide veranderen volgens de voorbeeldoutput hieronder:
// let startTop = true;
// let startLeft = true;
// let height = 3;

//  Output:
// *
// **
// ***
// let startTop = false;
// let startLeft = true;
// let height = 3;

//     Output:
// ***
// **
// *
// let startTop = true;
// let startLeft = false;
// let height = 3;

//     Output:
//   *
//  **
// ***

let startTop: boolean = false;
let startLeft: boolean = true;

let hoogte: number = 3;
let aantalAfTedrukkenlijnen = hoogte
let breedte:number = hoogte
let aantalAfgedruktelijnen: number= 0

let aantalToeTevoegensterren: number;
let aantalToeTevoegenspaties: number;
let extrasterrenperlijn: number;
let extraspatiesperlijn: number;

if(startTop){
    aantalToeTevoegensterren = 1
    extrasterrenperlijn = 1

    if(startLeft){
    aantalToeTevoegenspaties = 0
    extraspatiesperlijn = 0
}

    else{
        aantalToeTevoegenspaties = breedte -1
        extraspatiesperlijn = -1
    }
} else {
    aantalToeTevoegensterren = breedte
    extrasterrenperlijn = -1
    aantalToeTevoegenspaties = 0
    if(startLeft) {
        extraspatiesperlijn = 0
    } else {
        extraspatiesperlijn = 1
    }
}

//TL: x x x x
//TR: x x x x
//BR: x x x 1
//BL: x x x 0



while(aantalAfgedruktelijnen < aantalAfTedrukkenlijnen){
// console.log("*")// je wilt lijn van sterren herhalen, hoeveel keren wil je het herhalen? → 3 keren want hoogte = 3
let lijn: string = ''

let aantalToegevoegdespaties: number = 0
while(aantalToegevoegdespaties < aantalToeTevoegenspaties){

    lijn += " "
aantalToegevoegdespaties++
}

let aantalToeGevoegdesterren: number = 0
while(aantalToeGevoegdesterren<aantalToeTevoegensterren){

    lijn = lijn + "*"
    aantalToeGevoegdesterren++
}
console.log(lijn)

    aantalToeTevoegensterren += extrasterrenperlijn //++ of-- ⚠️⚠️⚠️
    aantalToeTevoegenspaties += extraspatiesperlijn //-- of ++ ⚠️⚠️⚠️
    aantalAfgedruktelijnen++
}

//https://www.youtube.com/watch?v=pUQXNMH1RVM&list=PLyUsB5g1Kyfp-lxnVEbbgs9G_bmxAoVuC&index=32

