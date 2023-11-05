//Dodanie danych z bazy do strony

json = [] 

async function getData() {
  const data = await fetch("http://localhost:3000/select");
  json = await data.json();
  console.log(json);

  var VBi = 0
  var VMe = 0
  var VMo = 0
  var allVotes = json.length-1
  for(let i = 0; i<=json.length-1;i++){
    if(json[i].Kandydat == 1){
      VBi++
    }else if(json[i].Kandydat == 2){
      VMe++
    }else if(json[i].Kandydat == 3){
      VMo++
    }
  }

  //Wyświetlenie głosów
  console.log(VBi)
  console.log(VMe)
  console.log(VMo)
  console.log(allVotes)

  document.getElementById("nag1_5").innerHTML = "Aktualny prowadzący to:"
  document.getElementById("nag1_6").innerHTML = "Ilość głosów: " + allVotes

  if(VBi > VMe && VBi > VMo){
    document.getElementById("nag1_7").innerHTML = "Robert Biedroń"
    console.log("Wygrywa 1")
  }else if (VMe > VBi && VMe > VMo){
    document.getElementById("nag1_7").innerHTML = "Sławomir Mentzen"
    console.log("Wygrywa 2")
  }else if(VMo > VMe && VMo > VBi){
    document.getElementById("nag1_7").innerHTML = "Mateusz Morawiecki"
    console.log("Wygrywa 3")
  }

  //Wysłanie danych do sS
  sessionStorage.setItem("Biedron", VBi)
  sessionStorage.setItem("Mentzen", VMe)
  sessionStorage.setItem("Morawiecki", VMo)

  for(let i = 0; i<=json.length-1;i++){
    const div = document.createElement("div")
        div.classList.add("Table")

        const numerT = document.createElement("numerT")
        numerT.setAttribute("id", "numerT")
        numerT.innerHTML = json[i].ID_glosu

        const peselT = document.createElement("peselT")
        peselT.setAttribute("id", "peselT")
        peselT.innerHTML = json[i].Pesel

        const kanT = document.createElement("kanT")
        kanT.setAttribute("id", "kanT")
        kanT.innerHTML = json[i].Kandydat


        div.appendChild(numerT)
        div.appendChild(peselT)
        div.appendChild(kanT)
      

        document.getElementById("table").appendChild(div)
  }
}
getData();


//Powrót do klienta
function openKlientHTML() {
  window.open('index.html', '_self')
}


const ctx = document.getElementById('myChart');
    
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Robert Biedroń', 'Sławomir Mentzen', 'Mateusz Morawiecki'],
          datasets: [{
            label: '# Ilość głosów',
            data: [sessionStorage.getItem("Biedron"), sessionStorage.getItem("Mentzen"), sessionStorage.getItem("Morawiecki"),],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
  
