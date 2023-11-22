function redt(){
    document.getElementById("h1").style.color = "red";
    
}

function bluet(){
    document.getElementById("h1").style.color  = "blue";
    
}

function wyświetl(){
    var li = parseInt(document.getElementById("i").value)
    console.log(li)

    for(var i = 0; i<=li; i++){
        console.log(i)
    }    
}