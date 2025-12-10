// H2: Dagen in de maand
// Schrijf een functie dat het aantal dagen in een maand teruggeeft. 
// Vraag zowel achter de maand én het jaartal, je zal dus moeten rekening houden met schrikkeljaren.
// Maak gerust gebruikt van je vorige script om te zien of een jaar een schrikkeljaar is of niet.

function dagenMaand(maand, jaartal) {
  let dagen;
  switch (maand) {
    case "januari":
    case "maart":
    case "mei":
    case "juli":
    case "augustus":
    case "oktober":
    case "december":
      dagen = 31;
      console.log(dagen);
      break;
    case "april":
    case "juni":
    case "september":
    case "november":
      dagen = 30;
      console.log(dagen);
      break;
    case "februari":
      if ((jaartal % 100 !== 0)&&(jaartal % 4 === 0) || (jaartal % 400 === 0) ) {
        dagen = 29;
        console.log(dagen);
      } else {
        dagen = 28;
        console.log(dagen);
      }
  }
}

dagenMaand("februari", 1994);