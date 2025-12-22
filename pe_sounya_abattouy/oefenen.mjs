// Schrijf een script dat door gebruik te maken van minstens twee lussen de volgende output naar het scherm zal printen:
// 1
// 1 2
// 1 2 3
// 1 2 3 4

let i = 1
while (i<=4) {
    let space = " "
    let j = 0
    while (j<=4) {
        if (j===1) {
            space +=j
        } else  {
            space += " " + j
        } j++
    }
    console.log(space)
    i++
}