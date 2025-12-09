// M4: Delers
// Schrijf een functie die voor een getal de som van de delers van dit getal gaat afdrukken (zonder het getal zelf). 
// Als het getal bijvoorbeeld 12 zou zijn, zal de functie 1 + 2 + 3 + 4 + 6 = 16 weergeven.


 function somDelers (n){

    let som = 0
  for(let i = 1; i<n; i++){
    if(somDelers%n===0){
som += i
    }
    console.log(som)
  }

}

somDelers(12)