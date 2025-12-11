// H3: Battleships part deux
// Als uitbreiding op je zeeslag schrijf je functies om boten op je speelveld te plaatsen. 
// Geef de functie een lengte van je boot mee (2 tot 5) en een richting (up, down, left of right). 
// Controleer of er genoeg plaats is om de boot te zetten en plaats in de array je boot met B.
// 1. Speelveld 10x10 opbouwen
let speelveld = [];

for (let i = 0; i < 10; i++) {
  speelveld[i] = [];
  for (let j = 0; j < 10; j++) {
    speelveld[i][j] = " ";   // leeg veld
  }
}

// 2. Functie om op een coördinaat te schieten
function coordinaten(x, y) {
  speelveld[y][x] = "*";
}

// 3. Functie om een boot te plaatsen
function plaatsBoot(x, y, lengte, richting) {
  // eerst controleren of de boot binnen het veld past
  if (richting === "right") {
    if (x + lengte > 10) return;        // past niet, dan stoppen
    for (let i = 0; i < lengte; i++) {
      speelveld[y][x + i] = "B";
    }
  } else if (richting === "left") {
    if (x - (lengte - 1) < 0) return;
    for (let i = 0; i < lengte; i++) {
      speelveld[y][x - i] = "B";
    }
  } else if (richting === "down") {
    if (y + lengte > 10) return;
    for (let i = 0; i < lengte; i++) {
      speelveld[y + i][x] = "B";
    }
  } else if (richting === "up") {
    if (y - (lengte - 1) < 0) return;
    for (let i = 0; i < lengte; i++) {
      speelveld[y - i][x] = "B";
    }
  }
}

function schiet(x, y) {
  if (speelveld[y][x] === "B") {
    speelveld[y][x] = "*";   // geraakt
  } else {
    speelveld[y][x] = "^";   // gemist
  }
}


// voorbeelden
coordinaten(2, 5);
plaatsBoot(3, 3, 4, "right");
plaatsBoot(0, 9, 3, "up");
schiet(3, 3);

console.log(speelveld);

//⚠️⚠️⚠️