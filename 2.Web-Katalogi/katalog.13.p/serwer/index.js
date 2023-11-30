//Express
const express = require("express")
const app = express()

//Corse
const cors = require("cors")

//Port
const port = 3001

//Tablice z todo
var todos = [
    { name: 'Programowanie', days: '1', done: false},


]

//Pobranie paczki do noda aby node działał poprawnie
app.use(cors())

//Wyświetla tabelę todos która jest wyżej
app.get('/gettodo', function(req, res){
    res.json(todos)
}) 

//Tworzenie nowego zadania
app.get('/addtodo/:nazwa/:dni', function (req, res){

    //Parametry z /addtodo/:nazwa/dni
    const dni = req.params.dni
    const nazwa = req.params.nazwa


    const tmptodo = { name: nazwa, days: dni, done: false}
    console.log(tmptodo)
    
    todos.push(tmptodo)

    console.log("Dodano zadanie: " + "Nazwa: " + nazwa + ". Czas: " + dni)
    res.send("ok")
})

//Szukanie tablicy
app.get('/search/:name', function (req, res){
    
    const nazwa = req.params.name
 
    for(var i = 0; i <= json.length -1 ; i++){
        if(nazwa == name){
            todos[i].done = true
        }
    }
})

//Wyświetlanie portu aplikacji
app.listen(port, function () {
    console.log("port aplikacji: " + port)
})