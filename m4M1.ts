// M1: Nummerpiramide
// Schrijf een script dat gebruik maakt van een variabele number en aan de hand van die variabele en één of meerdere lussen de volgende output gaat hebben:

// 1
// 22
// 333
// 4444

let rij : number = 1

while(rij <= 4) {
 let kolom : number = 1
 let lijn = ""
 while (kolom <= rij) {
 
lijn = lijn + rij;
   kolom++
 }
 console.log(lijn) 
   rij++
}

 //⚠️⚠️⚠️