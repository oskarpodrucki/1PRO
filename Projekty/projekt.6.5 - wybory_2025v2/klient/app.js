//Dodanie danych z bazy do strony

json = [];

async function getData() {
  const data = await fetch("http://localhost:3000/select");
  json = await data.json();
  console.log(json);

}
getData();

//Otwarcie strony admina - Logowanie

function openAdmin() {

  var login = document.getElementById("user").value;
  var password = document.getElementById("pass").value;

  console.log(login)
  console.log(password)

  if (login == "1" && password == "1") {
    alert("Poprawne dane logowania. Wczytuję stronę admina")
    setTimeout(openAdminHTML(), 2500);
  } else {
    alert("Niepoprawne dane logowania. Próbuj dalej")
  }
}

//Otwarcie strony admina - Otwarcie

function openAdminHTML() {
  window.open('admin.html', '_self')
}


//Pobranie danych

//PESEL
function pesGET() {

  const pes = document.getElementById("input").value
  document.getElementById("pes1.1").innerHTML = pes

  //Wysłanie peselu
  sessionStorage.setItem("Pesel", pes);

}

//GŁOS
function glosGET1() {

  const wk = "1"
  document.getElementById("kan1.1").innerHTML = "1"

  //Wysłanie wyboru
  sessionStorage.setItem("wybranykandydat", wk);


}

function glosGET2() {

  const wk = "2"
  document.getElementById("kan1.1").innerHTML = "2"

  //Wysłanie wyboru
  sessionStorage.setItem("wybranykandydat", wk);

}

function glosGET3() {

  const wk = "3"
  document.getElementById("kan1.1").innerHTML = "3"

  //Wysłanie wyboru
  sessionStorage.setItem("wybranykandydat", wk);

}

//Wyślij dane do bazy danych

async function getToBase() {

  //Potwierdzanie
  var confirmed = confirm(
    "Jesteś pewny swojego wyboru? Głos możesz oddać tylko raz"
  );

  //Pobieranie i wyświetlanie danych w konsoli
  const peselU = sessionStorage.getItem("Pesel")
  const wybkandydat = sessionStorage.getItem("wybranykandydat")

  console.log(confirmed)
  console.log(peselU)
  console.log(wybkandydat)


  //Sprawdzanie danych
  
  //Czy się nie powtarza
  for(let i = 1;i<=json.length-1;i++){
    if(peselU == json[i].Pesel){
      console.log(json[i].Pesel)
      alert("Taki pesel oddał już głos")
      document.getElementById("pes1.1").innerHTML = "Taki pesel oddał już głos"
      return
    }
  }

  //Reszta
  if (peselU.length == "") {
    alert("Brak pesela, proszę wpisać pesel")
    return
  } else if (wybkandydat.length == "") {
    alert("Brak wybranego kandydata, proszę wpisać pesel")
    return
  } else if (peselU.length != 11) {
    alert("Pesel ma niepoprawną długość, proszę o ponowne wpisanie peselu");
    document.getElementById("pes1.1").innerHTML = "Zła długość peselu"
    sessionStorage.setItem("Pesel", pes = "")
    return
    confirmed = false
  } else {
    alert("Nie wykryto żadnych błędów")
  }

  //Sprawdzanie głębiej peselu

  for (var i = 0; i < json.length - 1; i++) {
    if (json[i].Pesel == peselU) {
      alert("Taki sam pesel oddał już głos, sprawdz swój pesel ponownie")
      document.getElementById("pes1.1").innerHTML = "Pesel oddał już głos"
      document.getElementById("kan1.1").innerHTML = "Pesel oddał już głos"

      sessionStorage.setItem("Pesel", pes = "")
      sessionStorage.setItem("wybranykandydat", wk = "")
    }
  }

  if (confirmed) {
    alert(
      "Głos został oddany, dziękujemy"
    );

    //Wysyłanie danych do bazy
    const upd = await fetch(
      `http://localhost:3000/add/${peselU}/${wybkandydat}`
    );

    //Usuwanie niepotrzebnych danych

    document.getElementById("pes1.1").innerHTML = "Oddałeś już głos"
    document.getElementById("kan1.1").innerHTML = "Oddałeś już głos"

    sessionStorage.setItem("Pesel", pes = "")
    sessionStorage.setItem("wybranykandydat", wk = "")
  } else {
  }
}


