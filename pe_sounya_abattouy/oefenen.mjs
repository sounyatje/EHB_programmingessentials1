// Schrijf een script dat door gebruik te maken van minstens twee lussen de volgende output naar het scherm zal printen:
// 1
// 1 2
// 1 2 3
// 1 2 3 4

// let i = 1
// while (i<=4) {
//     let space = " "
//     let j = 0
//     while (j<=4) {
//         if (j===1) {
//             space +=j
//         } else  {
//             space += " " + j
//         } j++
//     }
//     console.log(space)
//     i++
// }

Of

let i = 1;

while (i <= 4) {
  let j = 1;
  let rij = "";

  while (j <= i) {
    rij = rij + j + " ";
    j++;
  }

  console.log(rij);
  i++;
}

for (let i = 1; i<=4; i++){
     let lijn=""
    for (let j = 1; j<=i;j++){
     lijn = lijn + j + " "
     
    }
    console.log(lijn)
}


//1 2 3
//3 6 9
//5 10 15

for(let i = 1; i<=5; i=i+2){
    let rij = ""
    for(let j = 1; j<=3; j++){   //waarom 1 tot aan 3 en niet tot aan i
        rij = rij + (i*j) + " "
      
    }
     console.log(rij)
}

// Binnenste lus = bepaalt het aantal kolommen
    // j gaat ALTIJD van 1 tot 3 omdat we 3 kolommen willen
    // We gebruiken hier NIET i, want i bepaalt de waarde van de rij,
    // niet het aantal kolommen

//     Waarom tot 3 en niet tot i?

// Omdat:

// je altijd 3 kolommen wil

// j staat voor de kolom

// i staat voor de waarde van de rij, niet het aantal kolommen

// Als je j <= i zou doen, krijg je:

// rij i = 1 → 1 kolom

// rij i = 3 → 3 kolommen

// rij i = 5 → 5 kolommen ❌

// Dat is niet wat je wil.

// Kleine fout in je code

// Je console.log(rij) staat binnen de binnenste lus, daardoor log je te vroeg.

// ❌ Dit gebeurt nu:

// 1
// 1 2
// 1 2 3
