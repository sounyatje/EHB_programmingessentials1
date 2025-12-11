// H1: Garage
// Creëer een object genaamd autoGarage met eigenschappen naam (string) en autos (array van objecten, 
//     waar elk object een auto vertegenwoordigt met eigenschappen zoals merk en bouwjaar). 
// Voeg een methode vervangAuto toe waarmee je een oude auto kunt vervangen door een nieuwe.

autoGarage = {naam:"autoservice", autos :[{merk:"bmw", bouwjaar:2015},{merk:"volkswagen", bouwjaar:2020},{merk:"suzuki",bouwjaar:2019}]}


function vervangAuto (){
    autoGarage.autos[index] = nieuweAuto;
}
vervangAuto(0, { merk: "audi", bouwjaar: 2022 });

