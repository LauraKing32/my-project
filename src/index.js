const cityName = document.getElementById("cityName");
const citySearch = document.getElementById("citySearch");
const cityInput = document.getElementById("cityInput");
const cityTemp = document.getElementById("temp");
const cityRain = document.getElementById("cityRain");
const cityWind = document.getElementById("cityWind");

citySearch.onclick = function (e) {
  e.preventDefault();
  cityName.innerHTML = cityInput.value;
  searchCity(cityInput.value);
};

// get weather
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
    cityWind.innerHTML = Math.trunc(data.wind.speed);
  });
}
