// E4: Factorial
// Schrijf een functie dat de factorial van een getal gaat berekenen. 
// Je kan de factorial van een getal berekenen door alle getallen tussen 1 en het gegeven getal met elkaar te vermenigvuldigen, bijvoorbeeld voor 5:

// factorial van 5 (ook wel geschreven als !5) = 1 x 2 x 3 x 4 x 5 = 120
// Indien de gebruiker een getal lager dan 1 ingeeft mag je een console.error() gebruiken om een foutmelding weer te geven.

function factorialBerekenen (factorial){
    let resultaat = 1
for (let i =1; i<=5;i++)
    resultaat = resultaat * i
console.log("het factorial is: " + resultaat)
return(factorialBerekenen)
}

factorialBerekenen(5)

// et si jamais lutilisateur insert un chiffre: