const API_KEY = "67331c3deca3162089cbf4b62827835b";

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lgt = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lgt}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weatherContainer = document.querySelector("#weather span:first-child");
            const cityContainer = document.querySelector("#weather span:last-child");
            cityContainer.innerText = data.name;
            weatherContainer.innerText = data.weather[0].main;
        });
}

function onGeoFaliure() {
    alert("Geo system can't find your position. No weather cast for you.")
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoFaliure);