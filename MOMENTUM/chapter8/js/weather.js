const KEY ="d496b8479ecff64ade4de21af2815936";



function onGeoOK(position){
    const lat =  position.coords.latitude;
    const lng =  position.coords.longitude;
    console.log(lat,lng)

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${KEY}`
    fetch(url).then(response => response.json()).then(data => {
        const weatherContainer = document.getElementById("weather");
 
        const city = weatherContainer.querySelector("span:first-child");
        const weather = weatherContainer.querySelector("span:last-child");

        city.innerText = data.name;
        weather.innerText = data.weather[0].main;

    });
    console.log(url);
}

function onGeoError(){
    alert("Can't find")
}

navigator.geolocation.getCurrentPosition(onGeoOK,onGeoError);
 