//Podstawy
const express = require("express")
const cors = require("cors")
const mysql = require("mysql")

const app = express()
app.get(cors())


//Port
port = 3000


//Połączenie z bazą
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "warsztat_samochodowy",
})

con.connect(function(err){
    if(err){
        console.log(err)
    }else{
        console.log("Połączono z bazą")
    }
})

app.get("/", (req, res) => {
    res.send("Ok")
})
//Wyświetlanie
app.get("/select", (req,res) =>{
    
    const sql = "SELECT * FROM samochody"
    con.query(sql, function(err, result, fields){
        if(err){
            console.log(err)
        }else{
            console.log(result)
            res.send(result)
        }
    })
})

//Dodawanie
app.get("/add/:marka/:kolor", (req,res) => {
    
    const marka = req.params.marka
    const kolor = req.params.kolor

    const sql = `INSERT INTO samochody (Marka, Kolor) VALUES ('${marka}','${kolor}')`
    con.query(sql, function(err, result, fields){
        if(err){
            console.log(err)
        }else{
            console.log("Dodano rekord")
            res.send("Dodano rekord")
        }
    })
})

app.listen(port, (res,req)=>{
    console.log("Aplikacja działa")
})