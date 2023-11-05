var map = L.map('map').setView([52.1827252088869, 21.570922396394696], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// //Obszary poszukiwań

// //Oskar
// var polygon = L.polygon([
//     [51.509, -0.08],
//     [51.503, -0.06],
//     [51.51, -0.047]
// ]).addTo(map);

// //Maks i filip
// var polygon = L.polygon([
//     [52.18835660453126, 21.58373447063187],
//     [52.186541176977336, 21.59107299390058],
//     [52.18234436145326, 21.5894207532816],
//     [52.18219963661191, 21.585365253580473],
//     [52.183962616238176, 21.58055873541617]
// ]).addTo(map);

// //Bartosz
// var polygon = L.polygon([
//     [51.509, -0.08],
//     [51.503, -0.06],
//     [51.51, -0.047]
// ]).addTo(map);


// //Kosze
// var marker = L.marker([51.5, -0.09]).addTo(map);
// var marker = L.marker([51.5, -0.09]).addTo(map);
// var marker = L.marker([51.5, -0.09]).addTo(map);
