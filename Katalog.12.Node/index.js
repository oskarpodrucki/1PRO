const prom = require('async-prompt')

async function getData(){
    var zmienna1 = ""
    var zmienna2 = ""
    var zmienna1 = await prom("Podaj imię: ")
    var zmienna2 = await prom("Podaj nazwisko: ")
   
    console.log("Witaj" +" "+ zmienna1 +" "+ zmienna2)

}
getData();

//dir, cd.., cd ./`nazwa folderu, cd d:\Sz\Programowanie\HTML\Katalog.12.Node\01

//npm https://www.npmjs.com/$ npm install async-prompt)