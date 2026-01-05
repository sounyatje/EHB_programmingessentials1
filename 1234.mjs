// Schrijf een stukje code om onderstaande uitvoer te verkrijgen.

// 1 2 3
// 3 6 9
// 5 10 15

for (let i = 1; i<=5; i=i+2){
    let rij=""
    for(let j=1; j<=3;j++){
       rij = rij+(i*j)+" "
    }
console.log(rij)
}