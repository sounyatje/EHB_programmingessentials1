// M1: Bankrekening
// Bouw een object genaamd bankrekening met eigenschappen rekeningnummer (string), saldo (getal), en eigenaar (string). 
// Voeg een methode toonSaldo toe om het huidige saldo weer te geven. 
// Voeg een methode overschrijving toe waarmee je geld aan een andere bankrekening kan storten. 
// Dit zou als volgt kunnen gebruikt worden:

// bankrekening.toonSaldo();
 // Output: Er staat momenteel €100 op de rekening met nummer 123456
// rekening2.toonSaldo();
// Output: Er staat momenteel €20 op de rekening met nummer 987654
// bankrekening.overschrijving(rekening2, 50);
// bankrekening.toonSaldo();
// Output: Er staat momenteel €50 op de rekening met nummer 123456
// rekening2.toonSaldo();
// Output: Er staat momenteel €70 op de rekening met nummer 987654

let bankrekening = {rekeningnummer:"123456789", saldo:100, eigenaar:"suske"}

let bankrekening2 = {rekeningnummer:"987654321", saldo:20, eigenaar:"wiske"}

function toonSaldo (saldo){
 
  console.log(`Er staat momenteel €${bankrekening.saldo} op de rekening met nummer ${bankrekening.rekeningnummer}`)
  console.log(`Er staat momenteel €${bankrekening2.saldo} op de rekening met nummer ${bankrekening2.rekeningnummer}`)
}

function overschrijving(vanRekening, doelRekening, bedrag){
  vanRekening.saldo -= bedrag;
  doelRekening.saldo += bedrag;
}

toonSaldo();                         
overschrijving(bankrekening, bankrekening2, 50);
toonSaldo();                        
