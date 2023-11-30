//POBRANE DANE
var json = []


//Pobieranie danych
async function getData() {
    const data = await fetch("https://restcountries.com/v2/all")
    json = await data.json()

}

getData();

//Losowanie numeru 

function losujNum() {
    var max = json.length - 1
    return Math.floor(Math.random() * max);
}

//Losowanie kraji

function START() {

    document.getElementById("gra").innerHTML = ""

    //Przypisywanie krajów
    var kraj1 = json[losujNum()]

    //Pojawianie się krajów w konsoli
    console.log(kraj1)
    console.log(kraj1.capital)

    //Tworzenie div
    const div_kraj1 = document.createElement("div")

    div_kraj1.classList.add("rotate-center")

    //Nadanie atrybuty divów
    div_kraj1.setAttribute("id", "okno")

    div_kraj1.setAttribute("onclick", `spr(${kraj1.capital}`)


    //Nazwa kraju
    const nazwaKraj1 = document.createElement("h1")

    nazwaKraj1.innerHTML = kraj1.name

    //Flaga
    const flagaKraj1 = document.createElement("img")
    flagaKraj1.setAttribute("src", kraj1.flag)
    flagaKraj1.setAttribute("width", "100px")

    //Input
    const inputKraj1 = document.createElement("input")
    inputKraj1.setAttribute("type", "text")
    inputKraj1.setAttribute("id", "input")
    inputKraj1.setAttribute("onchange", "spr()")


    //Kraj1 appendChild
    div_kraj1.appendChild(nazwaKraj1)
    div_kraj1.appendChild(flagaKraj1)
    div_kraj1.appendChild(inputKraj1)

    document.getElementById("gra").appendChild(div_kraj1)

}


//Sprawdzanie odpowiedzi, system żyć, system punktacji, brak możliwości wybrania innej odpowiedzi, automatyczna zmiana kraju
var zyci = 3;
var punkty = 0;
var odp = document.getElementById("input").value;

//Wyświetlanie punktów i życia
document.getElementById("zyci").innerHTML = zyci
document.getElementById("punkty").innerHTML = punkty

function spr() {

    //Sprawdzanie odpowiedzi, dodawanie i pokazywanie punktów, odejmowanie i pokazywanie żyć
    if (odp == kraj1.capital) {
        odpo.style.backgroundColor = "green"
        punkty++;
        document.getElementById("punkty").innerHTML = punkty
        alert("Gratuluję, dobra odpowiedz. Pozostało ci " + zyci + " żyć. Ilość punktów: " + punkty + ".")
        setTimeout(START, 2500);

    } else if (odp !== kraj1.capital) {
        odpo.style.backgroundColor = "red"
        zyci--
        document.getElementById("zyci").innerHTML = zyci
        console.log(zyci)

        if (zyci === 0) {
            alert("Koniec gry")
            document.write("Odświerz stronę aby zagrać ponownie")
        } else {
            alert("Błędna odpowieć. Pozostało ci " + zyci + " żyć.")

        }

        setTimeout(START, 2500);
    }
}


spr();