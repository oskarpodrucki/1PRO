
// Pozyskiwanie danych
var json = []

async function getData() {


    const data = await fetch("https://restcountries.com/v2/all")
    json = await data.json()

    console.log(json)
    console.log(json[0].name)

    for (var i = 0; i <= json.length - 1; i++) {
        const div = document.createElement("div")

        console.log(json[i].name)

        //nazwa
        const h1 = document.createElement("h1")
        h1.innerHTML = json[i].name

        //populacja
        const populacja = document.createElement("p")
        populacja.innerHTML = "Populacja: " + json[i].population

        //stolica
        const stolica = document.createElement("p")
        stolica.innerHTML = "Stolica: " + json[i].capital

        //flaga
        const flaga = document.createElement("img")
        flaga.setAttribute("src", json[i].flag)
        flaga.setAttribute("width", "50px")

        document.getElementById("body").appendChild(div)

        // ify

        if (json[i].population >= 10000000) {
            var i;
            i++
            div.style.backgroundColor = "lightgreen"
        }

        /*
            if(json[i].name.length>=10){
                h1.style.fontSize="95%"
            }
        */

        // pojawianie się informacji
        div.appendChild(h1)
        div.appendChild(populacja)
        div.appendChild(stolica)
        div.appendChild(flaga)
    }
    console.log(i)
}

// Tworzenie danych

getData()

// Wyszukiwanie dancyh

function find(){

    var nazwak = document.getElementById("find").value
 
    document.getElementById("body").innerHTML = ""

    const input = document.createElement("input")
    input.setAttribute("id", "szukaj")
    input.setAttribute("onchange", "find()")
    document.getElementById("body").appendChild(input)

    for (var i = 0; i <= json.length - 1; i++){

        if(json[i].name.includes(nazwak)){  
            
            console.log(json[i].name)


        const div = document.createElement("div")
        div.setAttribute("id", i.toString())

        //nazwa
        const h1 = document.createElement("h1")
        h1.innerHTML = json[i].name

        //populacja
        const populacja = document.createElement("p")
        populacja.innerHTML = "Populacja: " + json[i].population

        //stolica
        const stolica = document.createElement("p")
        stolica.innerHTML = "Stolica: " + json[i].capital

        //flaga
        const flaga = document.createElement("img")
        flaga.setAttribute("src", json[i].flag)
        flaga.setAttribute("width", "50px")

        div.appendChild(h1)
        div.appendChild(populacja)
        div.appendChild(stolica)
        div.appendChild(flaga)

        document.getElementById("body").appendChild(div)
        }
    }


}


// Znajdz metodę która sprawdza, czy dany fragment tekstu zawiera się w danym napisie, coś takiego