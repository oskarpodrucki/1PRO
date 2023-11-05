console.log(baseurl)

async function getToDOs() {
    const data = await fetch(baseurl + "/gettodo")
    const json = await data.json()
    console.log(json)

    document.getElementById("todo").innerHTML = ""

    const div = document.createElement("div")

    for (var i = 0; i <= json.length - 1; i++) {

        const div = document.createElement("div")
        div.classList.add("tododiv")

        const nazwa = document.createElement("h1")
        nazwa.innerHTML = json[i].name

        const czas = document.createElement("h1")
        czas.innerHTML = "Dni do końca: " + json[i].days


        div.appendChild(nazwa)
        div.appendChild(czas)

        if (json[i].done == true) {
            div.classList.add("done")
        } else {
            div.classList.add("notdone")
        }

        document.getElementById("todo").appendChild(div)
    }
}


async function sentData(){
     const name = document.getElementById("nazwa").value
     const time = document.getElementById("czas").value
     
     const url = `${baseurl}/addtodo/${name}/${time}`

     await fetch(url)
     
     console.log(name + time)
}


getToDOs();