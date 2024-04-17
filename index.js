let input = document.getElementById("input");
let timezone = document.getElementById("timezone");
let isp = document.getElementById("ISP");
let IPloc = document.getElementById("IP");
let city = document.getElementById("city");
let check = document.getElementById("check");


check.addEventListener("click", () => {
    fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_RCGPOwtBAQHaANec83TA0XxoKxERR&ipAddress=${input.value}`)
        .then(response => response.json())
        .then(data => {
            timezone.innerHTML = `${data.location.timezone}`
            isp.innerHTML = `${data.isp}`
            IPloc.innerHTML = `${data.ip}`
            console.log(data.location.region, data.location.country)
            console.log(data.ip)
            city.innerHTML = `${data.location.region}, ${data.location.country}`
    })
})


var map = L.map('map').setView([51.505, -0.09], 13);

var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})
osm.addTo(map);