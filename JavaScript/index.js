const cityFlags = { 
    "London": "🇬🇧",
    "Tokyo": "🇯🇵",
    "Johannesburg": "🇿🇦",
    "New York": "🇺🇸",
    "Cape Verde": "🇨🇻",
    "Honolulu": "🇺🇸🌺",
    "Sydney": "🇦🇺",
};
function getFlagForCity(city) {
    return cityFlags[city] || "📍"; 
}


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

// Tokyo
let tokyoElement = document.querySelector("#tokyo");
if (tokyoElement) {
let tokyoDateElement = tokyoElement.querySelector(".date");
let tokyoTimeElement = tokyoElement.querySelector(".time");
let tokyoTime = moment().tz("Asia/Tokyo");

tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small>]");
}

}
let cityInterval;

function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityFlag = getFlagForCity(cityName);

    if (cityInterval) {
        clearInterval(cityInterval);
    }

    function updateSelectedCityTime() {
        let cityTime = moment().tz(cityTimeZone);
        let citiesElement = document.querySelector("#cities");
        citiesElement.innerHTML = `
        <div class="cities">
            <div>
                <h2>${cityName} ${cityFlag}</h2>
                <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
            </div>
            <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
        </div>
        <a href="/" class="homepage">All cities</a>`;
    }

    updateSelectedCityTime();
    cityInterval = setInterval(updateSelectedCityTime, 1000);
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
