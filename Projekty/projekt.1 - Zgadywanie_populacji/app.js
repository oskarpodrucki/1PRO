//Countries
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

    document.getElementById("button").style.display = "none";

    document.getElementById("div1").innerHTML = ""

    //Przypisywanie krajów
    var kraj1 = json[losujNum()]
    var kraj2 = json[losujNum()]

    //Pojawianie się krajów w konsoli
    console.log(kraj1)
    console.log(kraj2)

    //Tworzenie div
    const div_kraj1 = document.createElement("div")
    const div_kraj2 = document.createElement("div")

    div_kraj1.classList.add("rotate-center")
    div_kraj2.classList.add("rotate-center")

    //Nadanie atrybuty divów
    div_kraj1.setAttribute("id", "kraj1")
    div_kraj2.setAttribute("id", "kraj2")

    div_kraj1.setAttribute("onclick", `spr(${kraj1.population},${kraj2.population},"1")`)
    div_kraj2.setAttribute("onclick", `spr(${kraj1.population},${kraj2.population},"2")`)

    //Nazwa kraju
    const nazwaKraj1 = document.createElement("h1")
    const nazwaKraj2 = document.createElement("h1")

    nazwaKraj1.innerHTML = kraj1.name
    nazwaKraj2.innerHTML = kraj2.name

    //Flaga
    const flagaKraj1 = document.createElement("img")
    const flagaKraj2 = document.createElement("img")
    flagaKraj1.setAttribute("src", kraj1.flag)
    flagaKraj2.setAttribute("src", kraj2.flag)
    flagaKraj1.setAttribute("width", "100px")
    flagaKraj2.setAttribute("width", "100px")

    //Odpowiedz appendchild
    const odp = document.createElement("div")
    odp.setAttribute("id", "odp")
    document.getElementById("div1").appendChild(odp)

    odp.classList.add("rotate-center")

    //Kraj1 appendChild
    div_kraj1.appendChild(nazwaKraj1)
    div_kraj1.appendChild(flagaKraj1)

    document.getElementById("div1").appendChild(div_kraj1)

    //Kraj1 appendChild
    div_kraj2.appendChild(nazwaKraj2)
    div_kraj2.appendChild(flagaKraj2)

    document.getElementById("div1").appendChild(div_kraj2)

}



//Sprawdzanie odpowiedzi, system żyć, system punktacji, brak możliwości wybrania innej odpowiedzi, automatyczna zmiana kraju
var zyci = 3;
var punkty = 0;
function spr(pk1, pk2, choose) {

    //Wyświetlanie punktów i życia
    document.getElementById("zyci").innerHTML = zyci
    document.getElementById("punkty").innerHTML = punkty

    //Wyświetlanie w konsoli populacji kraju 1 i 2, oraz wyświetlanie który kraj został wybrany
    console.log(pk1)
    console.log(pk2)
    console.log(choose)

    const odpo = document.getElementById("odp")


    //Sprawdzanie odpowiedzi, dodawanie i pokazywanie punktów, odejmowanie i pokazywanie żyć
    if (pk1 > pk2 && choose == "1") {
        odpo.style.backgroundColor = "green"
        punkty++;
        document.getElementById("punkty").innerHTML = punkty
        alert("Gratuluję, dobra odpowiedz. Pozostało ci " + zyci + " żyć. Ilość punktów: " + punkty + ".")
        setTimeout(START, 2500);

    } else if (pk1 > pk2 && choose == "2") {
        odpo.style.backgroundColor = "red"
        zyci--
        document.getElementById("zyci").innerHTML = zyci
        console.log(zyci)

        if (zyci === 0) {
            alert("Twoja ilość żyć wynosi 0. Koniec gry")
            document.write("Odświerz stronę aby zagrać ponownie")
        } else {
            alert("Błędna odpowieć. Pozostało ci " + zyci + " żyć.")

        }
        setTimeout(START, 2500);

    } else if (pk1 < pk2 && choose == "2") {
        odpo.style.backgroundColor = "green"
        punkty++;
        document.getElementById("punkty").innerHTML = punkty
        alert("Gratuluję, dobra odpowiedz. Pozostało ci " + zyci + " żyć. Ilość punktów: " + punkty + ".")
        setTimeout(START, 2500);

    } else if (pk1 < pk2 && choose == "1") {
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

    //Brak możliwości wyboru innego kraju

    if (odpo.style.backgroundColor == "green" || odpo.style.backgroundColor == "red") {
        document.getElementById("kraj1").removeAttribute("onclick", `spr(${kraj1.population},${kraj2.population},"1")`);
        document.getElementById("kraj2").removeAttribute("onclick", `spr(${kraj1.population},${kraj2.population},"1")`);
        console.log("nie możesz już klinkąć 2 raz")
    }


}

spr();










