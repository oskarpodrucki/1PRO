const express = require('express')
const cors = require('cors')
const app = express()
const port = 3008

app.use(cors())

app.get('/', function(req, res){
  res.send('Hello World!')
  console.log("elo")
})

app.get('/nazwisko', function(req, res){
    res.send('Oskar PODRUCKI')
    console.log("elo123")
  })

app.get('/nazwisko/json', function(req, res){
    res.json({'Imię': 'Oskar', 'Nazwisko': 'PODRUCKI'})
    console.log("elo123")
  })

app.get('/nazwisko/gdziemieszka', function(req, res){
    res.send('Jakubów')
    console.log("elo4")
  })

  app.get('/nazwisko/gdziemieszka/jakaulica', function(req, res){
    res.send('Nowa')
    console.log("elo4")
  })

  app.get('/nazwisko/gdziemieszka/jakaulica/numerdomu', function(req, res){
    res.send('100')
    console.log("elo4")
  })


app.listen(port, function(){
  console.log(`Example app listening on port ${port}`)
})

//192.168.15.10 i wyłącz zaporę w domu