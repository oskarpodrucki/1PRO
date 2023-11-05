async function getData(){
    const data = await fetch('http://192.168.15.10:3000/nazwisko')
    const json = await data.json()
    console.log(json)

}
getData();