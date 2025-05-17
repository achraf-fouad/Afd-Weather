const apiKey ="863242cfb2b1d357e6093d9a4b";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}` );
    var data = await response.json();
    console.log(data); 
    if (data.cod == "404") {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        return; // Arrête la fonction ici si erreur
    } else {
        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";
    }
    document.getElementById("city").innerHTML = data.name;
    document.getElementById("temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.getElementById("humidity").innerHTML = Math.round(data.main.humidity) + "%";
    document.getElementById("wind").innerHTML = Math.round(data.wind.speed) + "km/h";
    if (data.weather[0].main == "Clouds") {
        document.body.style.backgroundImage = "url('images/clouds.jpg')";
    } else if (data.weather[0].main == "Clear") {
        document.body.style.backgroundImage = "url('images/clear.jpg')";
    } else if (data.weather[0].main == "Rain") {
        document.body.style.backgroundImage = "url('images/rain.jpg')";
    } else if (data.weather[0].main == "Mist") {
        document.body.style.backgroundImage = "url('images/mist.jpg')";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

checkWeather();