// E3: Temperatuurconverter
// Schrijf een functie dat een temperatuur van Farenheit naar Celcius kan omzetten of omgekeerd van Celcius naar Fahrenheit.
//  Deze functie zal twee parameters aanvaarden: temperatuur en isCelcius (dat true of false kan zijn). 
//  Zorg ervoor dat deze functie de waarde zal terugsturen en zelf geen output heeft.

function Temperatuurconverter (temperatuur, isCelcius){
    if(isCelcius == true){
 let celciusnaarFahrenheit = (temperatuur*9/5)+32
  console.log("het temperatuur in fahrenheit is: " + celciusnaarFahrenheit)
 return ( celciusnaarFahrenheit)

    }
    else {
    let fahrenheitnaarCelcius = (temperatuur - 32)*5/9
     console.log("het temperatuur in celcius is: " + fahrenheitnaarCelcius)
    return( fahrenheitnaarCelcius)

    }
}

Temperatuurconverter (24,true)
Temperatuurconverter(68,false)