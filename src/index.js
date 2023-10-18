const cityName = document.getElementById("cityName");
const citySearch = document.getElementById("citySearch");
const cityInput = document.getElementById("cityInput");
const cityTemp = document.getElementById("temp");
const cityRain = document.getElementById("cityRain");
const cityWind = document.getElementById("cityWind");
const weatherIcon = document.getElementById("weatherIcon");
const description = document.getElementById("description");
let celsiusTemp;

citySearch.onclick = function (e) {
  e.preventDefault();
  cityName.innerHTML = cityInput.value;
  searchCity(cityInput.value);
};

function searchCity(city) {
  let data;
  let apiKey = "cabdbda40038ba7d1165b953b1c7bd6c";
  let apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    apiKey +
    "&units=metric";
  axios.get(apiUrl).then(function (response, data) {
    data = response.data;
    cityTemp.innerHTML = Math.trunc(data.main.temp);
    cityRain.innerHTML = Math.trunc(data.main.humidity);
    description.innerHTML = data.weather[0].description
      .toLowerCase()
      .split(" ")
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
      .join(" ");
    cityWind.innerHTML = Math.trunc(data.wind.speed);
    weatherIcon.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    );
    weatherIcon.setAttribute("alt", response.data.weather[0].description);
    celsiusTemp = response.data.main.temp;
  });
}

// change temp links
const fahrenheit = document.getElementById("fahrenheit");
const celsius = document.getElementById("celsius");
fahrenheit.onclick = function (e) {
  e.preventDefault();
  fahrenheit.classList.add("active");
  celsius.classList.remove("active");
  let fahrenheitTemperature = (celsiusTemp * 9) / 5 + 32;
  temp.innerHTML = Math.round(fahrenheitTemperature);
};
celsius.onclick = function (e) {
  e.preventDefault();
  celsius.classList.add("active");
  fahrenheit.classList.remove("active");
  temp.innerHTML = Math.round(celsiusTemp);
};
