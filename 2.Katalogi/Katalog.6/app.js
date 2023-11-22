const body = document.getElementById("body")

const button = document.createElement("button")

for(var i = 0; i<=10; i++){
const button = document.createElement("button")
body.appendChild(button)
button.setAttribute("onclick", "wyświetl()")
button.setAttribute("id", "button"+i)
body.appendChild(button).innerHTML = i
}

for(var i=5; i<=10; i++){
    document.getElementById("button"+i).style.backgroundColor = "red";

}



function wyświetl(){
    console.log("No elo eloo")
}


const h1 = document.createElement("h1")

for(var i = 0; i<=10; i++){

    const h1 = document.createElement("h1")
    body.appendChild(h1)
    body.appendChild(h1).innerHTML = i
}