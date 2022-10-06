let now = new Date();
let currentDay = document.querySelector("#current-day");
let currentTime = document.querySelector("#current-time");

let Days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
currentDay.innerHTML = Days[now.getDay()] + " - ";
currentTime.innerHTML =
  addZero(now.getHours()) + ":" + addZero(now.getMinutes());

let inputForm = document.querySelector("#input-form");
inputForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let inputCity = document.querySelector("#inputCity");
  let city = document.querySelector("span.city");
  city.innerHTML = `${inputCity.value}`;

  let apiKey = "3bb0c822ffbf8d7d00af7f1e1a4032dc";
  let apiCityUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity.value}&appid=${apiKey}&units=metric`;
  axios.get(apiCityUrl).then(showInput);

  function showInput(response) {
    let weather = response.data.weather[0].description;
    let temp = Math.round(response.data.main.temp);
    let currentWeather = document.querySelector("#current-weather");
    let currentTemp = document.querySelector("#current-temp");
    currentWeather.innerHTML = weather;
    currentTemp.innerHTML = temp;
    let humidity = response.data.main.humidity;
    let wind = Math.round(response.data.wind.speed);
    let precipitation = response.data.clouds.all;
    let currentPrecipitation = document.querySelector("#precipitation");
    let currentHumidity = document.querySelector("#humidity");
    let currentWind = document.querySelector("#wind");
    currentPrecipitation.innerHTML = precipitation;
    currentHumidity.innerHTML = humidity;
    currentWind.innerHTML = wind;
    let weatherEmoji = document.querySelector("img.currentWeatherEmoji");
    if (weather === "clear sky") {
      weatherEmoji.setAttribute(
        "src",
        "https://ssl.gstatic.com/onebox/weather/256/sunny.png"
      );
    } else if (weather === "few clouds") {
      weatherEmoji.setAttribute(
        "src",
        "https://ssl.gstatic.com/onebox/weather/256/sunny_s_cloudy.png"
      );
    } else if (weather === "scattered clouds") {
      weatherEmoji.setAttribute(
        "src",
        "https://ssl.gstatic.com/onebox/weather/256/partly_cloudy.png"
      );
    } else if (weather === "broken clouds") {
      weatherEmoji.setAttribute(
        "src",
        "https://ssl.gstatic.com/onebox/weather/256/cloudy.png"
      );
    } else if (weather === "shower rain") {
      weatherEmoji.setAttribute(
        "src",
        "https://ssl.gstatic.com/onebox/weather/256/rain_light.png"
      );
    } else if (weather === "rain") {
      weatherEmoji.setAttribute(
        "src",
        "https://ssl.gstatic.com/onebox/weather/256/rain.png"
      );
    } else if (weather === "thunderstorm") {
      weatherEmoji.setAttribute(
        "src",
        "https://ssl.gstatic.com/onebox/weather/256/thunderstorms.png"
      );
    } else if (weather === "snow") {
      weatherEmoji.setAttribute(
        "src",
        "https://ssl.gstatic.com/onebox/weather/256/snow.png"
      );
    } else if (weather === "mist") {
      weatherEmoji.setAttribute(
        "src",
        "https://ssl.gstatic.com/onebox/weather/256/mist.png"
      );
    }

    let tempType = document.querySelector("#temp-type");
    tempType.innerHTML = "°C";
    document.querySelector("button.temp-button.tempC").style.backgroundColor =
      "lemonchiffon";
    document.querySelector("button.temp-button.tempC").style.color =
      "burlywood";
    document.querySelector("button.temp-button.tempF").style.backgroundColor =
      "burlywood";
    document.querySelector("button.temp-button.tempF").style.color =
      "lemonchiffon";

    getForecast(response.data.coord);
    getCoord();
    changeContinentImage();
  }
});

// let currentTemp = document.querySelector("#current-temp");
// let temp1 = 12;
// let temp2 = 66;
// let tempC = document.querySelector("#tempc");
// let tempF = document.querySelector("#tempf");

// tempF.addEventListener("click", function (event) {
//   event.preventDefault();
//   currentTemp.innerHTML = ;
// });
// tempC.addEventListener("click", function (event) {
//   event.preventDefault();
//   currentTemp.innerHTML = temp1;
// });

let currentButton = document.querySelector(".btn-secondary");
currentButton.addEventListener("click", function (event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(retrievePosition);
  function retrievePosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiKey = "3bb0c822ffbf8d7d00af7f1e1a4032dc";
    let apiCoordsUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiCoordsUrl).then(showInput);
    function showInput(response) {
      let weather = response.data.weather[0].description;
      let temp = Math.round(response.data.main.temp);
      let city = response.data.name;
      let currentCity = document.querySelector("span.city");
      let currentWeather = document.querySelector("#current-weather");
      let currentTemp = document.querySelector("#current-temp");
      currentCity.innerHTML = city;
      currentTemp.innerHTML = temp;
      currentWeather.innerHTML = weather;
      let humidity = response.data.main.humidity;
      let wind = Math.round(response.data.wind.speed);
      let precipitation = response.data.clouds.all;
      let currentPrecipitation = document.querySelector("#precipitation");
      let currentHumidity = document.querySelector("#humidity");
      let currentWind = document.querySelector("#wind");
      currentPrecipitation.innerHTML = precipitation;
      currentHumidity.innerHTML = humidity;
      currentWind.innerHTML = wind;
      let weatherEmoji = document.querySelector("img.currentWeatherEmoji");
      if (weather === "clear sky") {
        weatherEmoji.setAttribute(
          "src",
          "https://ssl.gstatic.com/onebox/weather/256/sunny.png"
        );
      } else if (weather === "few clouds") {
        weatherEmoji.setAttribute(
          "src",
          "https://ssl.gstatic.com/onebox/weather/256/sunny_s_cloudy.png"
        );
      } else if (weather === "scattered clouds") {
        weatherEmoji.setAttribute(
          "src",
          "https://ssl.gstatic.com/onebox/weather/256/partly_cloudy.png"
        );
      } else if (weather === "broken clouds") {
        weatherEmoji.setAttribute(
          "src",
          "https://ssl.gstatic.com/onebox/weather/256/cloudy.png"
        );
      } else if (weather === "shower rain") {
        weatherEmoji.setAttribute(
          "src",
          "https://ssl.gstatic.com/onebox/weather/256/rain_light.png"
        );
      } else if (weather === "rain") {
        weatherEmoji.setAttribute(
          "src",
          "https://ssl.gstatic.com/onebox/weather/256/rain.png"
        );
      } else if (weather === "thunderstorm") {
        weatherEmoji.setAttribute(
          "src",
          "https://ssl.gstatic.com/onebox/weather/256/thunderstorms.png"
        );
      } else if (weather === "snow") {
        weatherEmoji.setAttribute(
          "src",
          "https://ssl.gstatic.com/onebox/weather/256/snow.png"
        );
      } else if (weather === "mist") {
        weatherEmoji.setAttribute(
          "src",
          "https://ssl.gstatic.com/onebox/weather/256/mist.png"
        );
      }

      let tempType = document.querySelector("#temp-type");
      tempType.innerHTML = "°C";
      document.querySelector("button.temp-button.tempC").style.backgroundColor =
        "lemonchiffon";
      document.querySelector("button.temp-button.tempC").style.color =
        "burlywood";
      document.querySelector("button.temp-button.tempF").style.backgroundColor =
        "burlywood";
      document.querySelector("button.temp-button.tempF").style.color =
        "lemonchiffon";

      getForecast(response.data.coord);
      getCoord();
      changeContinentImage();
    }
  }
});

function showCurrent() {
  navigator.geolocation.getCurrentPosition(retrievePosition);
  function retrievePosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiKey = "3bb0c822ffbf8d7d00af7f1e1a4032dc";
    let apiCoordsUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiCoordsUrl).then(showInput);
    function showInput(response) {
      let weather = response.data.weather[0].description;
      let temp = Math.round(response.data.main.temp);
      let city = response.data.name;
      let currentCity = document.querySelector("span.city");
      let currentWeather = document.querySelector("#current-weather");
      let currentTemp = document.querySelector("#current-temp");
      currentCity.innerHTML = city;
      currentTemp.innerHTML = temp;
      currentWeather.innerHTML = weather;
      let humidity = response.data.main.humidity;
      let wind = Math.round(response.data.wind.speed);
      let precipitation = response.data.clouds.all;
      let currentPrecipitation = document.querySelector("#precipitation");
      let currentHumidity = document.querySelector("#humidity");
      let currentWind = document.querySelector("#wind");
      currentPrecipitation.innerHTML = precipitation;
      currentHumidity.innerHTML = humidity;
      currentWind.innerHTML = wind;
      let weatherEmoji = document.querySelector("img.currentWeatherEmoji");
      if (weather === "clear sky") {
        weatherEmoji.setAttribute(
          "src",
          "https://ssl.gstatic.com/onebox/weather/256/sunny.png"
        );
      } else if (weather === "few clouds") {
        weatherEmoji.setAttribute(
          "src",
          "https://ssl.gstatic.com/onebox/weather/256/sunny_s_cloudy.png"
        );
      } else if (weather === "scattered clouds") {
        weatherEmoji.setAttribute(
          "src",
          "https://ssl.gstatic.com/onebox/weather/256/partly_cloudy.png"
        );
      } else if (weather === "broken clouds") {
        weatherEmoji.setAttribute(
          "src",
          "https://ssl.gstatic.com/onebox/weather/256/cloudy.png"
        );
      } else if (weather === "shower rain") {
        weatherEmoji.setAttribute(
          "src",
          "https://ssl.gstatic.com/onebox/weather/256/rain_light.png"
        );
      } else if (weather === "rain") {
        weatherEmoji.setAttribute(
          "src",
          "https://ssl.gstatic.com/onebox/weather/256/rain.png"
        );
      } else if (weather === "thunderstorm") {
        weatherEmoji.setAttribute(
          "src",
          "https://ssl.gstatic.com/onebox/weather/256/thunderstorms.png"
        );
      } else if (weather === "snow") {
        weatherEmoji.setAttribute(
          "src",
          "https://ssl.gstatic.com/onebox/weather/256/snow.png"
        );
      } else if (weather === "mist") {
        weatherEmoji.setAttribute(
          "src",
          "https://ssl.gstatic.com/onebox/weather/256/mist.png"
        );
      }

      let tempType = document.querySelector("#temp-type");
      tempType.innerHTML = "°C";
      document.querySelector("button.temp-button.tempC").style.backgroundColor =
        "lemonchiffon";
      document.querySelector("button.temp-button.tempC").style.color =
        "burlywood";
      document.querySelector("button.temp-button.tempF").style.backgroundColor =
        "burlywood";
      document.querySelector("button.temp-button.tempF").style.color =
        "lemonchiffon";

      getForecast(response.data.coord);
      getCoord();
      changeContinentImage();
    }
  }
}

showCurrent();

let tempCButton = document.querySelector("button.tempC");
let tempFButton = document.querySelector("button.tempF");

tempFButton.addEventListener("click", function (event) {
  event.preventDefault();
  let city = document.querySelector("span.city").innerHTML;
  let apiKey = "3bb0c822ffbf8d7d00af7f1e1a4032dc";
  let apiCityUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiCityUrl).then(showInput);
  function showInput(response) {
    let currentTemp = document.querySelector("#current-temp");
    let temp = Math.round(response.data.main.temp);
    let tempF = Math.round(temp * (9 / 5) + 32);
    currentTemp.innerHTML = tempF;
    let tempType = document.querySelector("#temp-type");
    tempType.innerHTML = "°F";

    document.querySelector("button.temp-button.tempF").style.backgroundColor =
      "lemonchiffon";
    document.querySelector("button.temp-button.tempF").style.color =
      "burlywood";
    document.querySelector("button.temp-button.tempC").style.backgroundColor =
      "burlywood";
    document.querySelector("button.temp-button.tempC").style.color =
      "lemonchiffon";

    // let tempMin0 = document.querySelectorAll(".weather-forecast-temp-min-num");
    // let tempMax0 = document.querySelectorAll(".weather-forecast-temp-max-num");
    // for (let tempElement of tempMin0) {
    //   let tempMin = parseInt(tempElement.innerHTML);
    //   let tempMinF = Math.round(tempMin * (9 / 5) + 32);
    //   tempElement.innerHTML = tempMinF;
    //   console.log(tempMinF);
    // }
    // for (let tempElement of tempMax0) {
    //   let tempMax = parseInt(tempElement.innerHTML);
    //   let tempMaxF = Math.round(tempMax * (9 / 5) + 32);
    //   tempElement.innerHTML = tempMaxF;
    // }

    getForecastF(response.data.coord);
  }
});

tempCButton.addEventListener("click", function (event) {
  event.preventDefault();
  let city = document.querySelector("span.city").innerHTML;
  let apiKey = "3bb0c822ffbf8d7d00af7f1e1a4032dc";
  let apiCityUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiCityUrl).then(showInput);
  function showInput(response) {
    let currentTemp = document.querySelector("#current-temp");
    let temp = Math.round(response.data.main.temp);
    currentTemp.innerHTML = temp;
    let tempType = document.querySelector("#temp-type");
    tempType.innerHTML = "°C";
    document.querySelector("button.temp-button.tempC").style.backgroundColor =
      "lemonchiffon";
    document.querySelector("button.temp-button.tempC").style.color =
      "burlywood";
    document.querySelector("button.temp-button.tempF").style.backgroundColor =
      "burlywood";
    document.querySelector("button.temp-button.tempF").style.color =
      "lemonchiffon";
    getForecast(response.data.coord);
  }
});

function displayForecast(response) {
  let forecast = response.data.daily;
  let forecastElement = document.querySelector(".weather-forecast");
  let forecastHTML = `<div class="row">`;
  forecast.forEach(function (forecastDay, index) {
    tempMin = Math.round(forecastDay.temp.min);
    tempMax = Math.round(forecastDay.temp.max);

    if (index < 6) {
      forecastHTML =
        forecastHTML +
        `
              <div class="col-2">
                  <div class="weather-forecast-date">${formatDay(
                    forecastDay.dt
                  )}</div>
                   <img class="forecastWeatherEmoji" src="http://openweathermap.org/img/wn/${
                     forecastDay.weather[0].icon
                   }@2x.png" alt="Weather icon" >
                  <div class="weather-forecast-temp">
                    <span class="weather-forecast-temp-min"><span class="weather-forecast-temp-min-num">${tempMin}</span>°</span>-
                    <span class="weather-forecast-temp-max"><span class="weather-forecast-temp-min-num">${tempMax}</span>°</span>
                  </div>
              </div>
            `;
    }
  });

  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}

function getForecast(coordinates) {
  console.log(coordinates);
  let apiKey = "caa883a4a60d93878755b08a933f74ea";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(displayForecast);
}

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[day];
}

function displayForecastF(response) {
  let forecast = response.data.daily;
  let forecastElement = document.querySelector(".weather-forecast");
  let forecastHTML = `<div class="row">`;
  forecast.forEach(function (forecastDay, index) {
    tempMin = Math.round(forecastDay.temp.min);
    tempMax = Math.round(forecastDay.temp.max);

    if (index < 6) {
      forecastHTML =
        forecastHTML +
        `
              <div class="col-2">
                  <div class="weather-forecast-date">${formatDay(
                    forecastDay.dt
                  )}</div>
                   <img class="forecastWeatherEmoji" src="http://openweathermap.org/img/wn/${
                     forecastDay.weather[0].icon
                   }@2x.png" alt="Weather icon" >
                  <div class="weather-forecast-temp">
                    <span class="weather-forecast-temp-min"><span class="weather-forecast-temp-min-num">${tempMin}</span>°</span>-
                    <span class="weather-forecast-temp-max"><span class="weather-forecast-temp-min-num">${tempMax}</span>°</span>
                  </div>
              </div>
            `;
    }
  });

  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}

function getForecastF(coordinates) {
  console.log(coordinates);
  let apiKey = "caa883a4a60d93878755b08a933f74ea";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=imperial`;
  console.log(apiUrl);
  axios.get(apiUrl).then(displayForecastF);
}

function getCoord() {
  let city = document.querySelector("span.city").innerHTML;
  let apiKey = "caa883a4a60d93878755b08a933f74ea";
  let apiCityUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiCityUrl).then(showCity);
}
function showCity(response) {
  let lat = response.data.coord.lat;
  let lon = response.data.coord.lon;
  let apiKey = "caa883a4a60d93878755b08a933f74ea";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showCountry);
}
function showCountry(response) {
  let data = response.data.timezone;
  let textElement = document.querySelector("#country-city");
  textElement.innerHTML = data;
}

getCoord();

function changeContinentImage() {
  let continentImage = document.querySelector("#city-image");
  let continentElement = document.querySelector("#country-city");
  let continent = continentElement.innerHTML;
  if (continent.includes("Africa")) {
    continentImage.innerHTML =
      '<img id="city-image" src="src/africa.jpeg" alt="City\'s Image">';
  } else if (continent.includes("America")) {
    continentImage.innerHTML =
      '<img id="city-image" src="src/america.jpeg" alt="City\'s Image">';
  } else if (continent.includes("Asia")) {
    continentImage.innerHTML =
      '<img id="city-image" src="src/asia.jpeg" alt="City\'s Image">';
  } else if (continent.includes("Australia")) {
    continentImage.innerHTML =
      '<img id="city-image" src="src/australia.jpeg" alt="City\'s Image">';
  } else {
    continentImage.innerHTML =
      '<img id="city-image" src="src/europe.jpeg" alt="City\'s Image">';
  }
  console.log(continentImage);
  console.log(continentElement);
  console.log(continent);
}
// string.includes("abcd");
