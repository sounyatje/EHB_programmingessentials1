// E1: Honden
// Maak enkele objecten met de naam hond1, hond2, ... 
//  elk de eigenschappen naam (string), leeftijd (getal) en isSpeels (boolean). Zorg dat al deze honden in een array terecht komen.
// E2: Voorstellen
// Zorg ervoor dat de honden van E1 zich kunnen voorstellen. 

let honden = [
    {naam:"maya", leeftijd:1, isSpeels:true, begroet: 
        function stelVoor () {
            let speelsText;
            switch (this.isSpeels) {
                case true:
                    speelsText = "speels";
                    break;
                case false:
                    speelsText = "niet speels";
                    break;
            }
        console.log("hallo ik ben "+ this.naam + " ik ben " + this.leeftijd + " jaar oud " + "en ben " + speelsText)}},
    {naam:"loulou", leeftijd:3, isSpeels:true, begroet: 
        function stelVoor () { let speelsText;
            switch (this.isSpeels) {
                case true:
                    speelsText = "speels";
                    break;
                case false:
                    speelsText = "niet speels";
                    break;
            }
        console.log("hallo ik ben "+ this.naam + " ik ben " + this.leeftijd + " jaar oud " + "en ben " + speelsText)}},
    {naam:"kiki", leeftijd:5, isSpeels:false, begroet: 
        function stelVoor () { let speelsText;
            switch (this.isSpeels) {
                case true:
                    speelsText = "speels";
                    break;
                case false:
                    speelsText = "niet speels";
                    break;
            }
        console.log("hallo ik ben "+ this.naam + " ik ben " + this.leeftijd + " jaar oud " + "en ben " + speelsText)}},
    {naam:"zaza", leeftijd:2, isSpeels:true, begroet: 
        function stelVoor () { let speelsText;
            switch (this.isSpeels) {
                case true:
                    speelsText = "speels";
                    break;
                case false:
                    speelsText = "niet speels";
                    break;
            }
        console.log("hallo ik ben "+ this.naam + " ik ben " + this.leeftijd + " jaar oud " + "en ben " + speelsText)}},
    {naam:"max", leeftijd:7, isSpeels:false, begroet: 
        function stelVoor () { let speelsText;
            switch (this.isSpeels) {
                case true:
                    speelsText = "speels";
                    break;
                case false:
                    speelsText = "niet speels";
                    break;
            }
        console.log("hallo ik ben "+ this.naam + " ik ben " + this.leeftijd + " jaar oud " + "en ben " + speelsText)}}
]

for (let hond of honden) {

    hond.begroet();
}







/*
Résumé des erreurs et corrections pour l'exercice "Honden" :

1️⃣ Appel de méthode sur le tableau :
   - Erreur initiale : honden.begroet();
     * Problème : 'honden' est un tableau, pas un objet individuel.
     * Les méthodes 'begroet' ou 'stelVoor' existent sur chaque objet du tableau, pas sur le tableau lui-même.

2️⃣ Confusion avec le nom de la fonction :
   - Erreur : appeler hond.stelVoor()
   - Problème : la fonction a été définie comme :
       begroet: function stelVoor() { ... }
     * Le nom externe (propriété de l'objet) est 'begroet'.
     * Donc il faut appeler hond.begroet() pour exécuter la fonction.
     * 'stelVoor' est seulement le nom interne de la fonction, utilisé pour référence interne.

3️⃣ Boucle pour parcourir les éléments :
   - Pour que tous les chiens se présentent, il faut parcourir le tableau.
   - On utilise la boucle for...of :
       for (let hond of honden) {
           hond.begroet();
       }
     * 'hond' représente l'objet courant du tableau à chaque tour.
     * Cela permet d'appeler la méthode de chaque chien proprement et sans répétition.

💡 Conclusion :
- Les méthodes sont liées aux objets, pas aux tableaux.
- Pour appliquer une action à tous les éléments d’un tableau, il faut boucler.
- for...of est pratique et lisible pour parcourir tous les objets et utiliser leurs méthodes.
*/


// function createHond(naam, leeftijd, isSpeels) {     
//     return {         naam: naam,         leeftijd: leeftijd,         isSpeels: isSpeels,         
//         toString: function() {             let niet = "";             if(!this.isSpeels) niet = "niet ";            
//              return `Hallo, ik ben ${this.naam}. Ik ben ${this.leeftijd} jaar oud en ik ben ${niet}speels.`;         }     } }  
//              const hond1 = createHond("bobbie", 5, true); console.log(hond1.toString()); 
//              const hond2 = createHond("snoopy", 8, false); console.log(hond2.toString());  
//              const honden= []; for (let i = 0; i < 10; i++) 
//                 {     let naam = ...;     let leeftijd = ...;     let isSpeels = ...;    
//                      honden.push(createHond(naam, leeftijd, isSpeels)); }
 