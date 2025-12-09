// H1: Perfecte getallen
// Schrijf een applicatie dat alle "perfecte getallen" tussen 1 en 100 weergeeft.
// Een getal is perfect als de som van zijn delers (het getal zelf niet inbegrepen) gelijk is aan het getal zelf.
//  Bijvoorbeeld: 6 is een perfect getal want 1 + 2 + 3 (alle delers van 6) = 6

let som = 0;
for (let getal = 1; getal <= 100; getal++) {
  for (let test = 1; test < getal; test++) {
    if (getal % test === 0) {
      som += test;
    }
  } 
  if(som === getal){
    console.log(getal);
  }
  som = 0;
}