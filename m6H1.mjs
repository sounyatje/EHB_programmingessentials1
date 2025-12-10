// H1: Sort
// Maak een array met 10 gehele getallen. 
// schrijf code om deze getallen te sorteren van groot naar klein.

// let getallen= [7,5,3,9,1,8,2,6,4]

// for(let i = 0; i<getallen.length;i++){ //elle permet de verifier plusieurs fois le tableau
// for(let j = 0; j<getallen.length; j++){ //elle permet de verifier par case 'un a coté de l'autre
  
//     if(getallen[j]>getallen[j+1]){ //si la valeur n'est pas dans l'ordre il faut mettre dans l'ordre croissant
//           let tampon = 0 // tampon pour faire le swap
//         tampon = getallen[j]
//         getallen[j] = getallen[j+1]
//         getallen[j+1] = tampon
//         console.log(getallen)
//     }
// }
// }

/*deuxième possibilité*/ 
let getallen= [7,5,3,9,1,8,2,6,4]

for(let i = 0; i<getallen.length;i++){ //elle permet de verifier plusieurs fois le tableau
for(let j = i; j<getallen.length-1; j++){ //elle permet de verifier par case 'un a coté de l'autre
  
    if(getallen[i]>getallen[j+1]){ //si la valeur n'est pas dans l'ordre il faut mettre dans l'ordre croissant
          let tampon = 0 // tampon pour faire le swap
        tampon = getallen[i]
        getallen[i] = getallen[j+1]
        getallen[j+1] = tampon
        console.log(getallen)
    }
}
}

//⚠️⚠️⚠️