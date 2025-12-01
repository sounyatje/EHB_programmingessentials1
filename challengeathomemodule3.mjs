// @1: Rij van Fibonacci
// De rij van Fibonacci is een rij getallen waarbij elk getal de som is van de twee voorgaande getallen. 
// De rij begint met 0 en 1. De rij begint dus als volgt: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

// Schrijf een script dat de rij van Fibonacci afdrukt tot een bepaald getal. 
// Vraag aan de gebruiker tot welk getal de rij moet afgedrukt worden.

let prev = 0;
let curr = 1;

console.log(prev); // 0
console.log(curr); // 1

while (curr <= 20) {
  let next = prev + curr;
  console.log(next);
  prev = curr;
  curr = next;
}
//⚠️⚠️⚠️