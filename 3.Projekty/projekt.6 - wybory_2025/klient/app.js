//Otwarcie strony admina - Logowanie

function openAdmin(){

    var login = document.getElementById("user").value;
    var password = document.getElementById("pass").value;

    console.log(login)
    console.log(password)

    if(login == "1" && password == "1"){
        alert("Poprawne dane logowania. Wczytuję stronę admina")
        setTimeout(openAdminHTML(), 2500);
    }else{
        alert("Niepoprawne dane logowania. Próbuj dalej")
    }
}

//Otwarcie strony admina - Otwarcie

function openAdminHTML(){
    window.open('admin.html', '_self')
}


//Wyświetlanie peselu

function peselIns(){
    
    var pesel = document.getElementById("input").value
    var peselL = pesel.toString().length 

    console.log(pesel)
    console.log(peselL)

    if(peselL != 11){
        alert("Nieodpowiedni format peselu. Pesel powinien zawierać 11 cyfr. Proszę wpisać ponownie pesel")
        pesel = 0
        document.getElementById("input").innerHTML = ""
    }else{
        alert("Poprawny pesel. Proszę wybrać kandyda")
        document.getElementById("pes2").innerHTML = pesel
    }
    
}

//Wybranie kandydata

//Biedroń

function wybBiedron(){
    document.getElementById("kan2").innerHTML = 1
    document.getElementsByClassName("wybieram").removeAttribute("onclick")
}

//Mentzen

function wybMentzen(){
    document.getElementById("kan2").innerHTML = 2
    document.getElementById("wybieram").removeAttribute("onclick");
}

//Morawiecki

function wybMorawiecki(){
    document.getElementById("kan2").innerHTML = 3
    document.getElementById("wybieram").removeAttribute("onclick");
}