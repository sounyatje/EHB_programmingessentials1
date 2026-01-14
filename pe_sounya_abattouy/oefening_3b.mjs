import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let lijst = []

function voegPuntToe(lijst,punt){
lijst.push(punt)
return lijst
} 

function toonLijst (lijst) {
    if(lijst.length >0){
    console.log("er staat devolgende op mijn lijstje") 
    for(let i = 0; i<lijst.length; i++) {
        console.log(lijst[i])
    }} else {
        console.log("momenteel is mijn lijst leeg")
    }
}


function maakLijstLeeg (lijst, punt){
  while (lijst.length>0){
        lijst.pop()
    }
    return lijst
}

// function maakLijstLeeg(lijst) {
//     for (let i = lijst.length; i > 0; i--) {
//         lijst.pop(); // supprime toujours le dernier
//     }
//     return lijst;
// }

lijst = voegPuntToe(lijst,15)
lijst = voegPuntToe(lijst,9)
lijst = voegPuntToe(lijst,12)

toonLijst(lijst)
maakLijstLeeg(lijst)
toonLijst(lijst)