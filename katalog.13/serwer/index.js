//Express
const express = require("express")
const app = express()

//Corse
const cors = require("cors")

//Port  
const port = 3001

//todolist
var todos = [
    { name: 'Naucz się noda', days: '11', done: false },
    { name: 'Zrób obiad', days: "12", done: false },
    { name: 'Idz do urzędu', days: '15', done: true },
]

//Pobranie paczki do noda aby node działał poprawnie
app.use(cors())

//Wyświetla Hello World
app.get("/", function (req, res) {
    res.send("hello world")
})

//Wyświetla tabelę todos która jest wyżej
app.get('/gettodo', function (req, res) {
    res.json(todos)
})

//Tworzenie nowego zadania
app.get('/addtodo/:nazwa/:dni', function (req, res) {

    //Parametry które z /addtodo/:nazwa/:dni
    const dni = req.params.dni
    const nazwa = req.params.nazwa


    const tmptodo = { name: nazwa, days: dni, done: false }
    console.log(tmptodo)

    todos.push(tmptodo)

    console.log("Dodano zadanie: " + "Nazwa: " + nazwa + ". Czas: " + dni)
    res.send("ok")
})

//Wyświetlanie portu aplikacji
app.listen(port, function () {
    console.log("port aplikacji: " + port)
})