// H2: Rekenmachine (again)
// Maak een object genaamd rekenmachine met methoden voor optellen, aftrekken, vermenigvuldigen en delen. 
// Elk van deze methoden moet twee parameters accepteren en het resultaat teruggeven.

let rekenmachine = {
  optellen,
  aftrekken,
  vermenigvuldigen,
  delen
};


function optellen(a, b) {
  return a + b;
}

function aftrekken(a, b) {
  return a - b;
}

function vermenigvuldigen(a, b) {
  return a * b;
}

function delen(a, b) {
  return a / b;
}

console.log(rekenmachine.optellen(2, 3));        
console.log(rekenmachine.aftrekken(10, 4));      
console.log(rekenmachine.vermenigvuldigen(3, 5)); 
console.log(rekenmachine.delen(20, 4));          
