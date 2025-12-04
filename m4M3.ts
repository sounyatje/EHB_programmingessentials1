// M3: Sterrenpiramide nog verder uitbreiden
// Combineer M1 en M2. Zorg ervoor dat ipv sterren er getallen tevoorschijn komen in de piramide.

let startTop: boolean = false;
let startLeft: boolean = true;

let hoogte: number = 3;
let aantalAfTedrukkenlijnen = hoogte
let breedte:number = hoogte
let aantalAfgedruktelijnen: number= 0

let lijnNummer: number = 1
let lijnnummerVerschil: number =1

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
    lijnNummer = hoogte
    lijnnummerVerschil = -1
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

    lijn = lijn + lijnNummer
    aantalToeGevoegdesterren++
}
console.log(lijn)

    lijnNummer += lijnnummerVerschil
    aantalToeTevoegensterren += extrasterrenperlijn //++ of-- ⚠️⚠️⚠️
    aantalToeTevoegenspaties += extraspatiesperlijn //-- of ++ ⚠️⚠️⚠️
    aantalAfgedruktelijnen++
}

//https://www.youtube.com/watch?v=PwBoV9PwgTc&list=PLyUsB5g1Kyfp-lxnVEbbgs9G_bmxAoVuC&index=35

