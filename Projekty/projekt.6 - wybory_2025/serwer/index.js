//Podstawy
const express = require("express")
const cors = require("cors")
const mysql = require("mysql")

const app = express()
app.use(cors())

//port
port = 3000

//Połączenie z bazą danych
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "Wybory 2025"
})

//Error; połączenie z bazą 
con.connect(function (err){
    if(err){
        console.log(err)
    }else{
        console.log("Połączono z bazą danych Wybory 2025")
    }
})

//Czy działa serwer 

//W przeglądarce
app.get("/", (req, res) =>{
    res.send("Ok, serwer działa")
})

//W konsoli
app.listen(port, ()=>{
    console.log("Aplikacja działa na porcie: " + port)
})


//Pobieranie danych z bazy danych

app.get("/select", (req, res)=>{
    const sql = "SELECT * FROM wybierajacy"
    con.query(sql, function(err, result, fileds){
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    })
})