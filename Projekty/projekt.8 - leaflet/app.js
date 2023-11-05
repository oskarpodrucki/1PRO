var map = L.map('map').setView([52.221421911895156, 21.653220174697122], 200);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//**************************************************************************** */
//**************************************************************************** */

// var marker = L.marker([52.22145902419662, 21.653711536302943]).addTo(map);
// marker.bindPopup("<b>To jest mój dom</b><br>Mieszkam w Jakubowie").openPopup();

// var polygon = L.polygon([
//     [52.22171961399694, 21.653185990725774],
//     [52.22172620820467, 21.65396542167257],
//     [52.22100810708187, 21.65389682147972],
//     [52.22100975024942, 21.653145803016542],
// ]).addTo(map);


// var circleJ = L.circle([52.2190601253848, 21.67785220292837], {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5,
//     radius: 1000
// }).addTo(map);

// var circleM = L.circle([52.228173836514166, 21.61577660457687], {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5,
//     radius: 1000
// }).addTo(map);

// var circleMMZ = L.circle([52.182806712389784, 21.570754718343412], {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5,
//     radius: 2500
// }).addTo(map);

// circleJ.bindPopup("To jest Jakubów");
// circleM.bindPopup("To jest Mistów");
// circleMMZ.bindPopup("To jest Mińsk Mazowiecki");


// var polygonLOT = L.polygon([
//     [52.20070162852654, 21.62661095280793],
//     [52.18544798033662, 21.62648956946032],
//     [52.18672036140538, 21.694327032174858],
//     [52.20032965061359, 21.69592059933881]
// ]).addTo(map);

// polygonLOT.bindPopup("To jest Lotnisko. Kolega lubi lotniska. Ja w sumie też :)");


// var markerSz = L.marker([52.18665392414793, 21.571571713088407]).addTo(map);
// markerSz.bindPopup("<b>BUDUL MMZ</b><br>Najlepsza szkoła w MMZ").openPopup();

//**************************************************************************** */
//**************************************************************************** */

// Wyświetlanie puktu oraz odległości do niego w KM
// map.on('click', addMarker);

// function addMarker(e) {

//     console.log(markerSz)
//     var markerAM = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map)

//     var latlngs = [
//         [markerSz._latlng.lat, markerSz._latlng.lng],
//         [e.latlng.lat, e.latlng.lng],
//     ];


//     var polyline = L.polyline(latlngs, { color: 'red' }).addTo(map);
//     let length = map.distance(latlngs[0], latlngs[1])
//     console.log(length)

//     var fLength = (length / 1000).toFixed(3)
//     console.log(fLength)

//     polyline.bindPopup(fLength).openPopup();

//     map.fitBounds(polyline.getBounds());

// }
 
//**************************************************************************** */
//**************************************************************************** */

var wojewodztwa = []

//Wyświetlanie nazwy województwa
for (let i = 0; i <= woje.features.length - 1; i++) {
    var wojew = L.geoJSON(woje.features[i], { color: "blue" }).addTo(map)

    wojewodztwa.push(woje.features[i].properties.nazwa)


    wojew.on('click', showName)
    wojew.on('mouseover', setColor)
    wojew.on('mouseout', setColorPrew)
    wojew.on('click', RandomName)

    function showName(e) {
        wojew.bindPopup(woje.features[i].properties.nazwa).openPopup();
        console.log(woje.features[i].properties.nazwa)
    }

    function setColor(e) {
        this.setStyle({
            color: "red"
        })
        console.log(e)
    }

    function setColorPrew(e) {
        this.setStyle({
            color: "blue"
        })
        console.log(e)
    }

    function RandomName() {
        var index = Math.floor(Math.random() * wojewodztwa.length)
        var item = wojewodztwa[index];

        wojewodztwa.splice(index, 1)
        if (wojewodztwa.length - 1 > 0) {
            document.getElementById("LosoweWoj").innerHTML = item
            console.log(item)
            console.log(index)

            if(wojewodztwa[index] = woje.features[i].properties.nazwa){
                console.log("tak")
            }

        } else {
            document.getElementById("LosoweWoj").innerHTML = "Wylosowano wszystkie województwa"
            console.log("brak województw")
        }
    }
}
console.log(wojewodztwa)

//wylosowane wojewodztwo na czerwono
//uzytkownik wpisuje nazwe wojewodztwa ktore zostalo wylosowae
// za poprawna odpowiedz zdobywa punk, za zly odejmuje życia





