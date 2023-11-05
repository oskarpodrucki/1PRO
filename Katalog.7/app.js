/*

const bro = {
    imie: "jacek",
    nazwisko: "nowak",
    wiek: 77,
    buty: {rozmiar: 45, kolor: "czarne",}
};

console.log(bro.buty.kolor)
*/

/*
var klasa = [
 {imie: "Oskar", nazwisko: "Podrucki", wiek: 15},
 {imie: "Jan", nazwisko: "Kowalski", wiek: 13},  
 {imie: "Aneta", nazwisko: "Parol", wiek: 44},
]
console.log(klasa[1].imie)

var klasa_r = klasa.length

for(var i = 0; i<=klasa_r - 1; i++){
    
    if(klasa[i].wiek <= 18){
    console.log(klasa[i].imie + ", " + klasa[i].wiek)
    }

}
*/

/*
var saleinf = [

{numers: 212, ilosckomp: 14, kolorsal: "żółty",},
{numers: 224, ilosckomp: 18, kolorsal: "biały",},
{numers: 218, ilosckomp: 12, kolorsal: "biały",},

]

var saleinf_r = saleinf.length

for(var i = 0; i<=saleinf_r - 1; i++){

    console.log("Numer sali " + saleinf[i].numers + ", Ilość komputerów " + saleinf[i].ilosckomp + ", Kolor sali " + saleinf[i].kolorsal)
}
*/

/*
var divs = [
    {wysokosc:  "100", szerokosc: "150", kolor: "red", tekst: "to"},
    {wysokosc:  "200", szerokosc: "300", kolor: "green", tekst: "jest"},
    {wysokosc:  "50", szerokosc: "80", kolor: "blue", tekst: "div"},
]

const body = document.getElementById("body")

for(var i = 0; i<= divs.length-1; i++){
    const div = document.createElement("div")
    div.style.backgroundColor = divs[i].kolor
    div.style.height = divs[i].wysokosc + "px"
    div.style.width = divs[i].szerokosc + "px"
    body.appendChild(div).innerHTML = divs[i].tekst
}
*/

var butts = [
    {wysokosc:  "50", szerokosc: "100", tekst: "to"},
    {wysokosc:  "70", szerokosc: "1500", tekst: "jest"},
    {wysokosc:  "20", szerokosc: "770", tekst: "div"},
]

for(var i = 0; i<=butts.length-1; i++){
    const button = document.createElement("button")
    button.style.height = butts[i].wysokosc = "px"
    button.style.width = butts[i].szerokosc = "px"
    body.appendChild(button).innerHTML = butts[i].tekst
}

