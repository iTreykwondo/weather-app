const img = document.querySelector("#icon");
const button = document.querySelector("button");
const searchBar = document.querySelector("input");
const errorDiv = document.querySelector(".error");
const card = document.querySelector(".card");
let condition = document.querySelector("#condition");
let cityH2 = document.querySelector("#city-name");

async function fetchWeatherData(city) {
  city = searchBar.value;

  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=461bdbb7ad11819525963162ffe0d2a9&units=imperial`,
    { mode: "cors" }
  );
  const weatherData = await response.json();
  console.log(weatherData);

  return weatherData;
}

button.addEventListener("click", fetchWeatherData);
