/* Oefening 1: Logica (15 punten)

Je kan de volgende code gebruiken om een willekeurig getal tussen min en max te genereren:

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

Maak een kort script dat een gebruiker laat gokken naar een willekeurig getal. Vraag drie dingen aan de gebruiker:

- Het kleinst mogelijke getal
- Het hoogst mogelijke getal
- De gok van de gebruiker

Genereer een willekeurig getal tussen het kleinste en hoogst mogelijke. 
Indien de gok van de gebruiker niet tussen deze getallen ligt, stop het script met de melding dat de gok ongeldig is.

Als het getal er wel tussen ligt, zeg aan de gebruiker of het willekeurige getal lager, hoger of correct is dan het gekozen getal.

Herhaal dit tot de gebruiker het juiste getal gokt (of hij een ongeldige gok geeft).
*/

// import * as readline from "node:readline/promises";
// import { stdin as input, stdout as output } from "node:process";
// const userInput = readline.createInterface({ input, output })

// function random(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

//  let min = parseInt(await userInput.question("Het kleinst mogelijke getal: ")
//   );
//    let max = parseInt(await userInput.question("Het hoogst mogelijke getal: ")
//   );

//   let rnd = random(min,max)

//   console.log('het willekeurig getal tussen '+ min+' en '+max+ ' is ' +rnd)
// let gok = parseInt(await userInput.question("gok een getal tussen " + min +" en "+ max + ": "))

// let geldigeGok = min <= gok && gok <= max;
// let gewonnen = gok === rnd;

//   while(geldigeGok && !gewonnen){
//     if(gok < rnd){
//       console.log("raad hoger ")
//     } else {
//       console.log("raad lager ")
//     }
//      gok = parseInt(await userInput.question("gok een getal tussen " + min +" en "+ max+ ": "))
//      geldigeGok = min <= gok && gok <= max; 
//       gewonnen = gok === rnd;
//   }

//   if(gewonnen){
//     console.log("goed geraden!")
//   } else {
//     console.log("ongeldig getal")
//   }


  import * as readline from "node:readline/promises";
  import { stdin as input, stdout as output } from "node:process";
  const userInput = readline.createInterface({ input, output })
  
  
  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let kleinste = parseInt(await userInput.question("kleinst: "));
  let grootste = parseInt(await userInput.question("grootste: "));
  let gok = parseInt(await userInput.question("gok: "));

  let antwoord = random(kleinste, grootste);
  console.log(antwoord);

  do {
    if (gok < kleinste || gok > grootste) {
      console.log("Ongeldige gok. Het spel stopt.");
      process.exit();
    }

    if (gok === antwoord) {
      console.log("bravo het juiste antwoord is:  " + antwoord);
      process.exit();
    }

    if (gok < antwoord) {
      console.log("het is hoger");
    } else if (gok > antwoord) {
      console.log("het is lager");
    }
    gok = parseInt(await userInput.question("gok: "));
  } while (gok !== antwoord);

  userInput.close();
  process.exit();