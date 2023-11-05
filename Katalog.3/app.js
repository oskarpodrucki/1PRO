var zmiannal = 2
var ajajaj = "AJAJAJAJAJ"

var h1 = document.getElementById("h1")
var h2 = document.getElementById("h2")
var h3 = document.getElementById("h3")
var h4 = document.getElementById("h4")

            
            console.log(zmiannal+5)


            h1.innerHTML = ajajaj + " Nagłówek"
            h2.innerHTML = ajajaj + " Menu"
            h3.innerHTML = ajajaj + " Główna strona"
            h4.innerHTML = ajajaj + " Stopka"
            
            h1.style.color = "yellow"
            h2.style.color = "lightgreen"
            h3.style.color = "lightgreen"
            h4.style.color = "yellow"

            h1.style.fontSize = "50px"
            h2.style.fontSize = "50px"
            h3.style.fontSize = "50px"
            h4.style.fontSize = "50px"

            function zmien(){
            var i1 = document.getElementById("i1").value
            console.log(i1)
            }

            function h2z(){
            var h2z = document.getElementById("h2z").value
            console.log(h2z)
            document.getElementById("h2").innerHTML = h2z
            }

            function max(){
            var body = document.getElementById("body").style.gridTemplateColumns = "30% 70%"
            document.getElementById("body").style.transition = "0.5s"               
            }

            function min(){
            var body = document.getElementById("body").style.gridTemplateColumns = "10% 90%" 
            document.getElementById("body").style.transition = "0.5s"
            }