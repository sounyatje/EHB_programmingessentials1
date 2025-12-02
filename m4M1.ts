// M1: Nummerpiramide
// Schrijf een script dat gebruik maakt van een variabele number en aan de hand van die variabele en één of meerdere lussen de volgende output gaat hebben:

// 1
// 22
// 333
// 4444

let nummer : number = 1

while(nummer < 4) {
    let space: string = " "
    let nummer2: number = 1
    while (nummer2 < 4){
       nummer2++
        console.log(nummer2)
    }
    console.log(nummer)
    nummer++
}


 