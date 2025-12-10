// M2: Fibonacci
// Schrijf code om een reeks van Fibonacci op te bouwen, je houd de reeks bij in een array. 
// start met een array dat de waarden 0 en 1 bevat, je vult de array op tot deze 10 getallen bevat.
//  Binnen deze reeks zal elk volgend getal de som zijn van de vorige twee getallen. 
// Het resultaat dat je moet bekomen is dus [0, 1, 1, 2, 3, 5, 8, 13, 21, 34].

let rij = [0,1];
function rijFibonacci() {
  for (let i = 0; i < 8; i++) {
    let laatsteIndex = rij.length-1
    let voorlaatsteIndex = rij.length-2
let volgendgetal = rij[voorlaatsteIndex] + rij[laatsteIndex];
    rij.push(volgendgetal);
   
  }
   console.log(rij);
  return rij;
 
}
rijFibonacci();

//⚠️⚠️⚠️