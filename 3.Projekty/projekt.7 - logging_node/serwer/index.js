//PODSTAWY
const express = require('express')
const cors = require('cors')
const mysql = require('mysql')

const app = express()
app.use(cors())

//Port
const port = 3000

//Mysql 
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "users"
})


//ERROR
con.connect(function (err) {
    if (err) {
        console.log(err)
    } else console.log("Połączo z bazą danych")
})

//Czy działa; odp w konsoli
app.get("/test", (req, res) => {
    res.send({ "status": "ok" })
})

//Czy działa; odp w terminalu
app.listen(port, () => {
    console.log("Aplikacja działa na porcie:" + port)
})

//Sprawdzanie zalogowania
app.get("/login/:user/:password", (req, res) => {

    const user = req.params.user
    const pass = req.params.password
    // const uprawnienia= req.params.uprawnienia /:uprawnienia

    //console.log(`user: ${user}, pass: ${pass}`)

    const sql = `SELECT * FROM users WHERE login = "${user}"`

    con.query(sql, function (err, result, fileds) {
        console.log(result)
        if (err) {
            console.log(err)
        } else {

            var status = { "status": false, "upr": "user" }
        
            if (result.length != 0) {
                if (result[0].Password == pass) {
                    status.status = true
                    status.upr = result[0].Uprawnienia
                    console.log(status)
                }
            } else {
                status.status = false
                status.upr = "nieprawidłowy login lub hasło"
            }


            res.send(status)
        }


    })
})

