const API_KEY = "bbcbf7216c33446f3934d4729d420a4b"

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    console.log("당신의 위치는", lat, long);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = ` ${data.weather[0].main} / ${data.main.temp} `
    });
}

function onGeoError() {
    alert("위치 정보를 가져오는데 실패하였습니다.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);