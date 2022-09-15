// 7 reale sisesta temperatuur, mida soovite kontrollida!
function checkTemp(temperatuur) {if (temperatuur >= 0 && temperatuur <= 20){return -1}
else if (temperatuur >= 21 && temperatuur <=40){return 0}
else if (temperatuur >= 41 &&temperatuur <=60) {return 1}
else {return "Info pole saadaval :("}
}
let temperatuur= "21"
let vastus = checkTemp(temperatuur)
console.log (vastus)