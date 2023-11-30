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
    database: "wybory_2025"
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


//Pobieranie danych z bazy
app.get("/select", (req, res)=>{
    const sql = "SELECT * FROM wybierający"
    con.query(sql, function(err, result, fileds){
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    })
})

//Wysyłanie danych do bazy

app.get("/add/:pesel/:kandydat", function (req, res) {
  
    var pesel = req.params.pesel;
    var kandydat = req.params.kandydat;
  
    const sql = `INSERT INTO wybierający (ID_glosu, Pesel, Kandydat) VALUES (null, '${pesel}', '${kandydat}') `;
  
    con.query(sql, function (err, result, fields) {
      if (err) console.log(err);
      else console.log("Dodano rekord");
      res.send(result);
    });
  });


//Liczenie głosów poszczególnych kandydatów

app.get("/count1", function (req, res) {
    var sql = "SELECT COUNT(Kandydat) As G1 FROM wybierający WHERE Kandydat = 1";
  
    con.query(sql, function (err, result, fields) {
      if (err) console.log(err);
      res.send(result);
    });
  });
  
  app.get("/count2", function (req, res) {
    var sql = "SELECT COUNT(Kandydat) FROM wybierający WHERE Kandydat = 2";
  
    con.query(sql, function (err, result, fields) {
      if (err) console.log(err);
      res.send(result);
    });
  });
  
  app.get("/count3", function (req, res) {
    var sql = "SELECT COUNT(Kandydat) FROM wybierający WHERE Kandydat =  3";
  
    con.query(sql, function (err, result, fields) {
      if (err) console.log(err);
      res.send(result);
    });
  }); 
  


//Liczenie wszystkich głosów
app.get("/allvotes", function (req, res) {
    var sql = `SELECT COUNT(kandydat) AS "WSZYSTKIE GŁOSY:" FROM wybierający`;
  
    con.query(sql, function (err, result, fields) {
      if (err) console.log(err);
      res.send(result);
    });
  });
  