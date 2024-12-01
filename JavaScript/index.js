function updateTime() {

// Los Angeles
let losAngelesElement = document.querySelector("#los-angeles");
if (losAngelesElement) {
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime = moment().tz("America/Los_Angeles");

losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss [<small>]A[</small>]");
}

// Zürich
let zurichElement = document.querySelector("#zurich");
if (zurichElement){
let zurichDateElement = zurichElement.querySelector(".date");
let zurichTimeElement = zurichElement.querySelector(".time");
let zurichTime = moment().tz("Europe/Zurich");

zurichDateElement.innerHTML = zurichTime.format("MMMM Do YYYY");
zurichTimeElement.innerHTML = zurichTime.format("h:mm:ss [<small>]A[</small>]");
}

}

function updateCity(event) {
    let cityTimeZone = event.target.value;
if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
}
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
  <div class="cities">
            <div>
                <h2>${cityName}</h2>
                <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
            </div>
            <div class="time">${cityTime.format("h:mm:ss")}
            <small>${cityTime.format("A")}</small></div>
            </div>
            <a href="/" class="homepage">All cities</a>
    `;
}

updateTime();
setInterval(updateTime, 1000);


let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);