//tablica 3 obiekty, opis div
//wysokość szerokość kolor i tekst diva
//dowolna ilość



const body = document.getElementById("body")

var divs = [
    {"w": "75px", "h": "100px", "bg": "red", "txt": "Pierwszy" },
    {"w": "150px", "h": "100px" , "bg": "purple", "txt": "Drugi" },
    {"w": "150px", "h": "22220px", "bg": "green", "txt": "Trzeci"},
    {"w": "150px", "h": "100px", "bg": "yellow", "txt": "Czwarty"}
]

console.log(divs.length)

for(var i = 0; i<=divs.length-1; i++){
    const div = document.createElement("div")
    div.style.height = divs[i].h  
    div.style.width = divs[i].w 
    div.style.backgroundColor = divs[i].bg
    body.appendChild(div)
    body.appendChild(div).innerHTML = divs[i].txt
}

