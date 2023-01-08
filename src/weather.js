const API_KEY = "35e8b97dbdf64bf0d9683d60f6d471d9";


function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then((response) => response.json()
    .then((data) => {
        const name = data.name;
        const weather = data.weather[0].main;
        const temp = data.main.temp;
        document.querySelector(".weather__location").innerText = name;
        document.querySelector(".weather__weather").innerText = weather;
        document.querySelector(".weather__temp").innerText = `${temp}°C`;
    }))
}

function onGeoError() {
    document.querySelector(".weather__location").innerText = "Can't load weather :(";
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);