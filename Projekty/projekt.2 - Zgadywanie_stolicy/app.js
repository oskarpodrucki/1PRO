//POBRANE DANE
var json = []


//Pobieranie danych
async function getData() {
    const data = await fetch("https://restcountries.com/v2/all")
    json = await data.json()
    
    console.log(json)
}

getData();

//Losowanie numeru 

function losujNum() {
    var max = json.length - 1
    return Math.floor(Math.random() * max);
}

//Losowanie kraji

function START() {

    document.getElementById("button").style.display = "none";

    document.getElementById("gra").innerHTML = ""

    //Przypisywanie krajów
    kraj1 = json[losujNum()]
    Skraj1 = kraj1.capital
    
    //Pojawianie się kraju i jego stolicy w konsoli
    console.log(kraj1)
    console.log(Skraj1)

    //Tworzenie div
    const div_kraj1 = document.createElement("div")

    div_kraj1.classList.add("rotate-center")

    //Nadanie atrybuty divów
    div_kraj1.setAttribute("id", "okno")

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

    //Przycisk sprawdzający
    const buttonKraj1 = document.createElement("button")
    buttonKraj1.setAttribute("id", "buttonspr")
    buttonKraj1.setAttribute("onclick", "spr()")

    //Kraj1 appendChild
    div_kraj1.appendChild(nazwaKraj1)
    div_kraj1.appendChild(flagaKraj1)
    div_kraj1.appendChild(inputKraj1)
    div_kraj1.appendChild(buttonKraj1)

    document.getElementById("gra").appendChild(div_kraj1)

    //Wysłanie stolicy kraju
    sessionStorage.setItem("Stolica", Skraj1);
}

//Sprawdzanie odpowiedzi, system żyć, system punktacji, brak możliwości wybrania innej odpowiedzi, automatyczna zmiana kraju
var zyci = 3;
var punkty = 0;


function spr(){
    
    //Pobranie danych
    var skraj = sessionStorage.getItem("Stolica");
    var odp = document.getElementById("input").value

    //Sprawdzenie
    console.log(skraj)
    console.log(odp)

    //Wyświetlanie punktów i życia
    document.getElementById("zyci").innerHTML = zyci;
    document.getElementById("punkty").innerHTML = punkty;

    //Sprawdzanie odpowiedzi, dodawanie i pokazywanie punktów, odejmowanie i pokazywanie żyć
    if (odp == skraj) {
        punkty++;
        document.getElementById("punkty").innerHTML = punkty
        alert("Gratuluję, dobra odpowiedz. Pozostało ci " + zyci + " żyć. Ilość punktów: " + punkty + ".")
        setTimeout(START, 2500);

    } else if (odp != skraj) {
        zyci--
        document.getElementById("zyci").innerHTML = zyci
        console.log(zyci)

        if (zyci === 0) {
            alert("Koniec gry")
            document.write("Odświerz stronę aby zagrać ponownie")
        } else {
            alert("Błędna odpowieć. Pozostało ci " + zyci + " żyć.")

        }

        setTimeout(START(), 2500);
    }
}

//Utwórz nową funkcję do pobrania  inputa