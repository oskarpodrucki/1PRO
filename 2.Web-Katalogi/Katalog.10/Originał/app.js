//Countries
var json = []


//Pobieranie danych
async function getData(){
    const data = await fetch("https://restcountries.com/v2/all")
    json = await data.json()

}

getData();

//Losowanie numeru 

function losujNum(){
    var max = json.length - 1
    return Math.floor(Math.random() * max);
}

//Losowanie kraji

function losujKraj(){
    
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
    //flagaKraj1.setAttribute("height", "100px")
    //flagaKraj2.setAttribute("height", "100px")
    
    
    //Kraj1 appendChild
    div_kraj1.appendChild(nazwaKraj1)
    div_kraj1.appendChild(flagaKraj1)

    document.getElementById("div1").appendChild(div_kraj1)

    //Odpowiedz appendchild
    const odp = document.createElement("div")
    odp.setAttribute("id","odp")
    document.getElementById("div1").appendChild(odp)

    odp.classList.add("rotate-center")

    //Kraj1 appendChild
    div_kraj2.appendChild(nazwaKraj2)
    div_kraj2.appendChild(flagaKraj2)

    document.getElementById("div1").appendChild(div_kraj2)

}

function spr(pk1, pk2, choose){

    console.log(pk1)
    console.log(pk2)
    console.log(choose)

    const odpo = document.getElementById("odp")

    if(pk1>pk2 && choose == "1"){
        odpo.style.backgroundColor = "green"
    }

    if(pk1>pk2 && choose == "2"){
        odpo.style.backgroundColor = "red"
    }

    if(pk1<pk2 && choose == "2"){
        odpo.style.backgroundColor = "green"
    }

    if(pk1<pk2 && choose == "1"){
        odpo.style.backgroundColor = "red"
    }

}
spr();
