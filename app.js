const button = document.querySelector("button");
const searchBar = document.querySelector("input");
const errorDiv = document.querySelector(".error");

async function fetchWeatherData(city) {
  try {
    city = searchBar.value;
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=461bdbb7ad11819525963162ffe0d2a9&units=imperial`,
      { mode: "cors" }
    );

    const weatherData = await response.json();
    updateUI(weatherData);

    return weatherData;
  } catch (error) {
    errorDiv.textContent = error.message;
  }
}

function updateUI(weatherData) {
  const img = document.querySelector("#icon");
  let condition = document.querySelector("#condition");
  let cityH2 = document.querySelector("#city-name");
  let wind = document.querySelector("#wind-value");
  let temperature = document.querySelector("#temp-value");
  let feelsLike = document.querySelector("#feels-like-temp");

  let location = `${weatherData.name}, ${weatherData.sys.country}`;

  img.src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
  condition.textContent = weatherData.weather[0].main;
  cityH2.textContent = location;
  wind.textContent = `${weatherData.wind.speed} mph`;
  temperature.textContent = `${weatherData.main.temp}°F`;
  feelsLike.textContent = `${weatherData.main.feels_like}°F`;

  errorDiv.textContent = "";
}

button.addEventListener("click", fetchWeatherData);
